import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SEMANTIC_FILE = resolve(__dirname, '../design-tokens/semantic/style.json')

type TypographyToken = {
  $value?: {
    fontWeight?: string
  }
}

/**
 * Make sure to run this script after `tokens:create`,
 * but before `tokens:build`.
 *
 * Updates heading typography to use semibold font-weight token.
 */
function injectTypography(): void {
  const semanticRaw = readFileSync(SEMANTIC_FILE, 'utf8')
  const semanticTokens = JSON.parse(semanticRaw)

  const headings = Object.values(semanticTokens.typography.heading) as TypographyToken[]

  for (const heading of headings) {
    if (heading.$value?.fontWeight) {
      heading.$value.fontWeight = '{font-weight.semibold}'
    }
  }

  writeFileSync(SEMANTIC_FILE, JSON.stringify(semanticTokens, null, 2) + '\n', 'utf8')

  console.log('Updated heading typography to use semibold')
}

injectTypography()
