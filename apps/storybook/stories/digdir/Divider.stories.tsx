import type { Meta, StoryObj } from '@storybook/react'
import { Divider, Paragraph } from '@statisticsnorway/design-react'

const description = `
Divider brukes for å skape et visuelt skille mellom innhold.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/divider/overview
`

const meta: Meta<typeof Divider> = {
  title: 'Digdir/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Paragraph>Dette er innhold over en skillelinje.</Paragraph>

      <Divider />

      <Paragraph>Dette er innhold under skillelinjen.</Paragraph>
    </div>
  ),
}
