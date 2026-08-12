import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@statisticsnorway/design-react'
import { EnvelopeClosedFillIcon } from '@navikt/aksel-icons'

const description = `
Badge er en ikke-interaktiv komponent som viser status med eller uten tall.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/badge/overview
`

const meta: Meta<typeof Badge> = {
  title: 'Komponenter/Badge',
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
  render: () => <Badge count={15} maxCount={9} />,
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Badge count={15} maxCount={9} />
      <Badge count={15} maxCount={9} data-color='secondary' />
      <Badge count={15} maxCount={9} data-color='magic' />
      <Badge count={15} maxCount={9} data-color='neutral' />
      <Badge count={15} maxCount={9} data-color='danger' />
      <Badge count={15} maxCount={9} data-color='info' />
      <Badge count={15} maxCount={9} data-color='warning' />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Badge count={15} maxCount={9} variant='tinted' />
      <Badge count={15} maxCount={9} data-color='secondary' variant='tinted' />
      <Badge count={15} maxCount={9} data-color='magic' variant='tinted' />
      <Badge count={15} maxCount={9} data-color='neutral' variant='tinted' />
      <Badge count={15} maxCount={9} data-color='danger' variant='tinted' />
      <Badge count={15} maxCount={9} data-color='info' variant='tinted' />
      <Badge count={15} maxCount={9} data-color='warning' variant='tinted' />
    </div>
  ),
}

export const Floating: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Badge.Position placement='top-right'>
        <Badge></Badge>
        <EnvelopeClosedFillIcon title='Meldinger' style={{ height: '2rem', width: 'auto' }} />
      </Badge.Position>
      <Badge.Position placement='top-right'>
        <Badge count={9}></Badge>
        <EnvelopeClosedFillIcon title='Meldinger' style={{ height: '2rem', width: 'auto' }} />
      </Badge.Position>
      <Badge.Position placement='top-right'>
        <Badge data-color='danger'></Badge>
        <EnvelopeClosedFillIcon title='Meldinger' style={{ height: '2rem', width: 'auto' }} />
      </Badge.Position>
      <Badge.Position placement='top-right'>
        <Badge data-color='danger' count={9}></Badge>
        <EnvelopeClosedFillIcon title='Meldinger' style={{ height: '2rem', width: 'auto' }} />
      </Badge.Position>
    </div>
  ),
}

export const WithoutText: Story = {
  render: () => (
    <div>
      <Badge data-color='success' style={{ marginInlineEnd: '0.5rem' }} />
      Aktiv
    </div>
  ),
}
