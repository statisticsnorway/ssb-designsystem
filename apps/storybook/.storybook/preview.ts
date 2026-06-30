import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
import './preview.css'

import type { Preview } from '@storybook/react-vite'
import { create } from 'storybook/theming'

const preview: Preview = {
  parameters: {
    layout: 'padded',

    docs: {
      theme: create({
        base: 'light',
        brandTitle: 'SSB Designsystem',
        colorPrimary: '#016842',
        colorSecondary: '#016842',
      }),
    },

    options: {
      storySort: {
        order: ['Introduksjon', 'Showcase', 'SSB', 'Digdir'],
        method: 'alphabetical',
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
