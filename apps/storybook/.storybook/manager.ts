// .storybook/manager.ts
import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  enableShortcuts: false,
  initialActive: 'sidebar',
  isFullscreen: false,
  panelPosition: 'bottom',
  selectedPanel: 'storybook/source-loader/panel',
  showNav: true,
  showPanel: true,
  showToolbar: true,
  theme: create({
    base: 'light',
    brandTitle: 'SSB Designsystem',
    brandUrl: 'https://github.com/statisticsnorway/ssb-designsystem',
    brandTarget: '_self',
    colorPrimary: '#016842',
    colorSecondary: '#016842',
    appBorderRadius: 4,
  }),
})
