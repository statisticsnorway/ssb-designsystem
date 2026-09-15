import type { ChangelogFunctions } from '@changesets/types'

const changelogFunctions: ChangelogFunctions = {
  getReleaseLine: (changeset) => {
    const commit = changeset.commit ? `${changeset.commit}: ` : ''
    return `- ${commit}${changeset.summary}`
  },
  getDependencyReleaseLine: (_changesets, dependenciesUpdated) => {
    if (dependenciesUpdated.length === 0) return ''

    const dependencies = dependenciesUpdated.map(({ name, newVersion }) => `\`${name}@${newVersion}\``).join(', ')

    return `- Updated dependencies: ${dependencies}`
  },
}

export default changelogFunctions
