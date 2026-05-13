import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, Fieldset, ValidationMessage } from '@statisticsnorway/design-react'

const description = `
Checkbox gir brukerne mulighet til å velge ett eller flere alternativer.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/checkbox/overview
`

const meta: Meta<typeof Checkbox> = {
  title: 'Digdir/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Checkbox label',
    description: 'Description',
    value: 'value',
  },
}

export const Group: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
      <Fieldset.Description>Velg alle alternativene som er relevante for deg.</Fieldset.Description>
      <Checkbox label='E-post' value='epost' checked />
      <Checkbox label='Telefon' value='telefon' />
      <Checkbox label='SMS' value='sms' />
    </Fieldset>
  ),
}

export const WithError: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Kontaktvalg</Fieldset.Legend>
      <Checkbox label='E-post' value='epost' />
      <Checkbox label='Telefon' value='telefon' />
      <ValidationMessage>Du må velge minst ett alternativ</ValidationMessage>
    </Fieldset>
  ),
}
