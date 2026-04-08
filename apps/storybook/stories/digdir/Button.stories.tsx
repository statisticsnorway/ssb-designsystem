import type { Meta, StoryObj } from '@storybook/react'
import { Button, Divider, Heading } from '@digdir/designsystemet-react'
import { PencilWritingIcon } from '@navikt/aksel-icons'

const description = `
Button lar brukere utføre handlinger.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/button/overview
`

const meta: Meta<typeof Button> = {
  title: 'Digdir/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Knapp',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Primær</Button>
        <Button variant='secondary'>Sekundær</Button>
        <Button variant='tertiary'>Tertiær</Button>
        <Button disabled>Disabled</Button>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Farger
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button>Primær</Button>
          <Button data-color='neutral'>Neutral</Button>
          <Button data-color='purple'>Purple</Button>
          <Button data-color='danger'>Danger</Button>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Ikoner
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button icon aria-label='Kun ikon'>
            <PencilWritingIcon aria-hidden />
          </Button>
          <Button>
            <PencilWritingIcon aria-hidden />
            Rediger
          </Button>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Knapp som laster
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant='primary' loading>
            Laster…
          </Button>
          <Button variant='secondary' loading>
            Laster…
          </Button>
          <Button variant='tertiary' loading>
            Laster…
          </Button>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Knapp som lenke
        </Heading>
        <div style={{ display: 'flex' }}>
          <Button asChild>
            <a target='_blank' rel='noreferrer' href=''>
              Gå til designsystemet.no
            </a>
          </Button>
        </div>
      </div>
    </div>
  ),
}
