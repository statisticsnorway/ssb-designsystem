import '@statisticsnorway/design-css'
import './preview.css'

import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    options: {
      storySort: {
        order: ['SSB', 'Digdir'],
        method: 'alphabetical',
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
