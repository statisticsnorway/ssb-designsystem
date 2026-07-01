import { addons } from 'storybook/manager-api'
import customTheme from './customTheme'

addons.setConfig({
  initialActive: 'sidebar',
  layoutCustomisations: {
    showPanel: () => false,
  },
  theme: customTheme,
})
