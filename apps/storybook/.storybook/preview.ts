import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
import './preview.css'

import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    options: {
      storySort: {
        order: ['Showcase', 'SSB', 'Digdir'],
        method: 'alphabetical',
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
