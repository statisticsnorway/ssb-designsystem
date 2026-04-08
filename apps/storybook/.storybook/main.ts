import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../assets'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
