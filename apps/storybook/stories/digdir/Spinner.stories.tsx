import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Paragraph, Spinner } from '@digdir/designsystemet-react'

const description = `
Spinner brukes for å indikere at noe er i ferd med å lastes inn.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/spinner/overview
`

const meta: Meta<typeof Spinner> = {
  title: 'Digdir/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  render: () => <Spinner aria-label='Laster...' />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Størrelser
        </Heading>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Spinner data-size='2xs' aria-label='Laster...' />
          <Spinner data-size='xs' aria-label='Laster...' />
          <Spinner data-size='sm' aria-label='Laster...' />
          <Spinner data-size='md' aria-label='Laster...' />
          <Spinner data-size='lg' aria-label='Laster...' />
          <Spinner data-size='xl' aria-label='Laster...' />
        </div>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Med tekst
        </Heading>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Spinner aria-label='Laster...' data-size='sm' />
          <Paragraph>Laster inn data...</Paragraph>
        </div>
      </div>
    </div>
  ),
}
