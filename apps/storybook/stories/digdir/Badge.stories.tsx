import type { Meta, StoryObj } from '@storybook/react'
import { Badge, Divider, Heading } from '@digdir/designsystemet-react'
import { EnvelopeClosedFillIcon } from '@navikt/aksel-icons'

const description = `
Badge er en ikke-interaktiv komponent som viser status med eller uten tall.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/badge/overview
`

const meta: Meta<typeof Badge> = {
  title: 'Digdir/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    count: 15,
    maxCount: 9,
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Farger
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Badge count={9} />
          <Badge count={15} maxCount={9} variant='tinted' />
          <Badge count={15} maxCount={9} data-color='neutral' />
          <Badge count={15} maxCount={9} data-color='purple' />
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Fytende
        </Heading>
        <div>
          <Badge.Position placement='top-right'>
            <Badge data-color='danger' count={9}></Badge>
            <EnvelopeClosedFillIcon title='Meldinger' style={{ height: '2rem', width: 'auto' }} />
          </Badge.Position>
        </div>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Uten tall
        </Heading>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge data-color='success' style={{ marginInlineEnd: '0.5rem' }} />
          Aktiv
        </div>
      </div>
    </div>
  ),
}
