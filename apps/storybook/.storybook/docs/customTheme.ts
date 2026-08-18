import { create } from 'storybook/theming'
import '@statisticsnorway/design-css'

const primary = '#016842'
const primary_text = '#03332b'
const secondary_tinted = '#f0f8f9'
const white = '#ffffff'

export default create({
  base: 'light',

  // Typography
  fontBase: 'Roboto, sans-serif',
  fontCode: 'monospace',
  brandTitle: 'SSB Designsystem',
  brandUrl: 'https://github.com/statisticsnorway/ssb-designsystem',
  brandTarget: '_self',

  colorPrimary: primary,
  colorSecondary: primary,

  // UI
  appBg: secondary_tinted,
  appPreviewBg: white,
  appContentBg: white,
  appBorderRadius: 6,

  // Text colors
  textColor: primary_text,
  textInverseColor: white,
})
