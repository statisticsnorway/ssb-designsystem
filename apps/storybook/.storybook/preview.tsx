import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
import './preview.css'

import { DocsContainer, Unstyled } from '@storybook/addon-docs/blocks'
import type { DocsContainerProps } from '@storybook/addon-docs/blocks'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import type { ComponentProps } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import { Heading } from '@statisticsnorway/design-react'

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

const mdxComponents = {
  h1: (props: ComponentProps<'h1'>) => <Heading data-size='2xl' level={1} {...props} />,
  h2: (props: ComponentProps<'h2'>) => <Heading data-size='lg' level={2} {...props} />,
  h3: (props: ComponentProps<'h3'>) => <Heading data-size='md' level={3} {...props} />,
  h4: (props: ComponentProps<'h4'>) => <Heading data-size='sm' level={4} {...props} />,
}

function ColorSchemeDocsContainer(props: Readonly<DocsContainerProps>) {
  useEffect(() => {
    document.documentElement.dataset.colorScheme = getColorSchemeFromUrl()
  })

  return (
    <Unstyled>
      <MDXProvider components={mdxComponents}>
        <DocsContainer {...props} />
      </MDXProvider>
    </Unstyled>
  )
}

const preview: Preview = {
  parameters: {
    layout: 'padded',
    docs: {
      canvas: {
        layout: 'centered',
      },
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
