import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Label, Input, Textarea, ValidationMessage } from '@statisticsnorway/design-react'

const meta: Meta<typeof Field> = {
  title: 'Komponenter/Field',
  component: Field,
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

export const WithPrefix: Story = {
  render: () => (
    <Field>
      <Label>Hvor mange kroner koster det per måned?</Label>
      <Field.Affixes>
        <Field.Affix>NOK</Field.Affix>
        <Input />
        <Field.Affix>pr. mnd.</Field.Affix>
      </Field.Affixes>
    </Field>
  ),
}

export const WithCount: Story = {
  render: () => (
    <Field>
      <Label>Legg til en beskrivelse</Label>
      <Textarea rows={2} />
      <Field.Counter limit={10} />
    </Field>
  ),
}
