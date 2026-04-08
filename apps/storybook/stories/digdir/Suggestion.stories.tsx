import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@digdir/designsystemet-react'

const description = `
Suggestion brukes til å vise forslag basert på det brukeren skriver i et felt.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/suggestion/overview
`

const meta: Meta<typeof Alert> = {
  title: 'Digdir/Suggestion',
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
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert data-color='warning'>
      Suggestion er en eksperimentell komponent hos Digdir. Vi viser derfor foreløpig ikke egne eksempler her. Se lenken
      til Digdir for oppdatert dokumentasjon og eksempelbruk.
    </Alert>
  ),
}
