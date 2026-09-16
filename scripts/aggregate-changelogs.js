import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const packageRoot = path.resolve('packages')

async function findPackageDirectory(packageName) {
  const packageDirectories = await readdir(packageRoot, { withFileTypes: true })

  for (const directory of packageDirectories) {
    if (!directory.isDirectory()) continue

    const packageJsonPath = path.join(packageRoot, directory.name, 'package.json')

    try {
      const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))
      if (packageJson.name === packageName) return path.join(packageRoot, directory.name)
    } catch {
      // Ignore package directories that cannot be read.
    }
  }

  return undefined
}

function extractVersionSection(changelog, version) {
  const heading = `## ${version}`
  const start = changelog.indexOf(heading)

  if (start === -1) return undefined

  const contentStart = start + heading.length
  const nextHeading = changelog.indexOf('\n## ', contentStart)
  return changelog.slice(contentStart, nextHeading === -1 ? undefined : nextHeading).trim()
}

async function aggregateChangelogs(publishedPackages) {
  const sections = []

  for (const { name, version } of publishedPackages) {
    const packageDirectory = await findPackageDirectory(name)

    if (!packageDirectory) {
      throw new Error(`Could not find package directory for ${name}.`)
    }

    const changelog = await readFile(path.join(packageDirectory, 'CHANGELOG.md'), 'utf8')
    const body = extractVersionSection(changelog, version)

    if (!body) {
      throw new Error(`Could not find ${version} in ${name}/CHANGELOG.md.`)
    }

    sections.push(`### ${name}\n\n${body}`)
  }

  return sections.join('\n\n')
}

const publishedPackages = JSON.parse(process.argv[2] ?? '[]')

if (!Array.isArray(publishedPackages) || publishedPackages.length === 0) {
  throw new Error('No published packages given.')
}

console.log(await aggregateChangelogs(publishedPackages))
