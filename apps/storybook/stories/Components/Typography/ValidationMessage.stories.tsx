import type { Meta, StoryObj } from '@storybook/react-vite'
import { ValidationMessage } from '@statisticsnorway/design-react'

const meta: Meta<typeof ValidationMessage> = {
  title: 'Komponenter/Typography/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    customStyles: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}

export default meta
type Story = StoryObj<typeof ValidationMessage>

export const Default: Story = {
  render: () => <ValidationMessage>Dette er en valideringsmelding.</ValidationMessage>,
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ValidationMessage data-color='danger'>Dette er en feilmelding.</ValidationMessage>

      <ValidationMessage data-color='success'>Dette er en suksessmelding.</ValidationMessage>

      <ValidationMessage data-color='info'>Dette er en informasjonsmelding.</ValidationMessage>

      <ValidationMessage data-color='warning'>Dette er en advarsel.</ValidationMessage>
    </div>
  ),
}

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ValidationMessage data-color='danger' data-size='sm'>
        Dette er en feilmelding.
      </ValidationMessage>

      <ValidationMessage data-color='danger' data-size='md'>
        Dette er en feilmelding.
      </ValidationMessage>

      <ValidationMessage data-color='danger' data-size='lg'>
        Dette er en feilmelding.
      </ValidationMessage>
    </div>
  ),
}
