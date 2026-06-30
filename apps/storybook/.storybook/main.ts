import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const storybookConfigFile = fileURLToPath(import.meta.url)
const storybookConfigDir = dirname(storybookConfigFile)

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)', '../stories/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../assets'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    config.resolve = config.resolve ?? {}

    config.resolve.alias = {
      ...config.resolve.alias,
      '@statisticsnorway/design-react': resolve(storybookConfigDir, '../../../packages/react/src/index.ts'),
    }

    return config
  },
}

export default config
