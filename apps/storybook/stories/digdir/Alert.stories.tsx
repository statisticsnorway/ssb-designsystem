import type { Meta, StoryObj } from '@storybook/react'
import { Alert, Heading, Paragraph } from '@statisticsnorway/design-react'

const description = `
Alert gir brukeren informasjon som det er ekstra viktig at de ser og forstår.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/alert/overview
`

const meta: Meta<typeof Alert> = {
  title: 'Digdir/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    children: 'Dette er en informasjonsmelding.',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', flexWrap: 'wrap' }}>
      <Alert data-color='info'>Dette er en informasjonsmelding.</Alert>
      <Alert data-color='success'>Endringen ble lagret.</Alert>
      <Alert data-color='warning'>Du har ikke fylt ut alle feltene.</Alert>
      <Alert data-color='danger'>Det oppstod en feil. Prøv igjen senere.</Alert>

      <Alert data-color='info'>
        <Heading
          level={2}
          data-size='xs'
          style={{
            marginBottom: '0.5rem',
          }}
        >
          Med overskrift
        </Heading>
        <Paragraph>
          Hvis meldingen er lenger enn en setning kan det være nyttig å bruke en overskrift til å fremheve det viktigste
        </Paragraph>
      </Alert>
    </div>
  ),
}
