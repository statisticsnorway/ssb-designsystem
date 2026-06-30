// .storybook/manager.ts
import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'
import '@statisticsnorway/design-css'

const primary = '#016842'
const primary_text = '#03332b'
const white = '#ffffff'

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
    fontBase: 'Roboto, sans-serif',

    brandTitle: 'SSB Designsystem',
    brandUrl: 'https://github.com/statisticsnorway/ssb-designsystem',
    brandTarget: '_self',
    colorPrimary: '#016842',
    colorSecondary: '#016842',

    // UI
    appBg: white,
    appContentBg: white,
    appPreviewBg: white,
    appBorderRadius: 6,

    // Text colors
    textColor: primary_text,
    textInverseColor: white,

    // Toolbar default and active colors
    barTextColor: primary_text,
    barSelectedColor: primary,
    barHoverColor: primary,
    barBg: white,
  }),
  toolbar: {
    'storybook/a11y/panel': { hidden: true }, // Vision simulation
    'storybook/background': { hidden: true }, // Dark mode
    'storybook/measure-addon/tool': { hidden: false }, // Ruler
    'storybook/outline': { hidden: true }, // Outlines
    'storybook/source-loader/panel': { hidden: false }, // Code
    'storybook/viewport': { hidden: false }, // Resize
    copy: { hidden: true }, // Copy link to canvas only
    eject: { hidden: false }, // Open canvas only in new window
    fullscreen: { hidden: false }, // Hide sidebar
    remount: { hidden: true }, // Same as reload
    title: { hidden: true },
    zoom: { hidden: true },
  },
})
