import type { Meta, StoryObj } from '@storybook/react'
import { Card, Details, Paragraph } from '@statisticsnorway/design-react'

const description = `
Details er en sammenleggbar komponent som lar brukeren vise eller skjule innhold.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/details/overview
`

const meta: Meta<typeof Details> = {
  title: 'Digdir/Details',
  component: Details,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Details>

export const Default: Story = {
  render: () => (
    <Details>
      <Details.Summary>Mer informasjon</Details.Summary>
      <Paragraph>Dette er skjult innhold som vises når brukeren åpner komponenten.</Paragraph>
    </Details>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
      <Details>
        <Details.Summary>Mer informasjon</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>

      <Card>
        <Details data-variant='tinted'>
          <Details.Summary>Mer informasjon</Details.Summary>
          <Details.Content>Dette er en variant med bakgrunn og ramme.</Details.Content>
        </Details>
      </Card>

      <Card>
        <Details defaultOpen>
          <Details.Summary>Hva betyr dette?</Details.Summary>
          <Details.Content>Dette eksempelet er åpnet som standard.</Details.Content>
        </Details>
      </Card>
    </div>
  ),
}
