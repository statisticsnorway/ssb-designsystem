import type { Meta, StoryObj } from '@storybook/react'
import { Field, Label, Input, ValidationMessage } from '@statisticsnorway/design-react'

const description = `
Field er et hjelpemiddel for å automatisk koble et felt sammen med Label, Field.Description, ValidationMessage og Field.Counter.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/field/overview
`

const meta: Meta<typeof Field> = {
  title: 'Digdir/Field',
  component: Field,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Etternavn</Label>
      <Field.Description>Etternavn kan ikke inneholde mellomrom</Field.Description>
      <Input placeholder='Nordmann' />
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field>
      <Label>Etternavn</Label>
      <Field.Description>Etternavn kan ikke inneholde mellomrom</Field.Description>
      <Input defaultValue='Nordmann Svenske' />
      <ValidationMessage>Du kan ikke ha mellomrom i etternavnet ditt</ValidationMessage>
    </Field>
  ),
}
