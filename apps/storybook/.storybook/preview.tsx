import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
import './preview.css'

import { DocsContainer } from '@storybook/addon-docs/blocks'
import type { DocsContainerProps } from '@storybook/addon-docs/blocks'
import { useEffect } from 'react'
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

function getColorSchemeFromUrl(): string {
  try {
    const top = globalThis.top?.location ?? globalThis.location
    const globalsParam = new URLSearchParams(top.search).get('globals') ?? ''
    const match = globalsParam.split(';').find((p) => p.startsWith('colorScheme:'))
    return match?.split(':')[1] ?? 'light'
  } catch {
    return 'light'
  }
}

function ColorSchemeDocsContainer(props: Readonly<DocsContainerProps>) {
  // No deps array – runs after every render to pick up URL changes from manager window
  useEffect(() => {
    document.documentElement.dataset.colorScheme = getColorSchemeFromUrl()
  })

  return <DocsContainer {...props} />
}

const preview: Preview = {
  parameters: {
    layout: 'padded',
    docs: {
      container: ColorSchemeDocsContainer,
    },
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
