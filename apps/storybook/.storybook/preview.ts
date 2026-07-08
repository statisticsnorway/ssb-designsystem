import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
import './preview.css'

import type { Decorator, Preview } from '@storybook/react-vite'

export const globalTypes = {
  colorScheme: {
    name: 'Fargemodus',
    toolbar: {
      icon: 'sun',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
      ],
      dynamicTitle: true,
    },
  },
}

export const initialGlobals = {
  colorScheme: 'light',
}

export const decorators: Decorator[] = [
  (Story, context) => {
    const colorScheme = (context.globals.colorScheme as string) ?? 'light'
    document.documentElement.dataset.colorScheme = colorScheme
    return Story()
  },
]

const preview: Preview = {
  parameters: {
    layout: 'padded',
    options: {
      storySort: {
        order: ['Introduksjon', 'Kom i gang', 'Komponenter', 'Demosider', 'SSB'],
        method: 'alphabetical',
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
