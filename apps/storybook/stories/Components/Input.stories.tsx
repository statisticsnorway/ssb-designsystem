import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input, Field, Label, ValidationMessage } from '@statisticsnorway/design-react'

const meta: Meta<typeof Input> = {
  title: 'Komponenter/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input aria-label='input' />,
}

export const WithLabel: Story = {
  render: () => (
    <Field>
      <Label>Fornavn</Label>
      <Input placeholder='Ola' />
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field>
      <Label>Med feilmelding</Label>
      <Input defaultValue='O' />
      <ValidationMessage>Fornavn må være minst 2 tegn</ValidationMessage>
    </Field>
  ),
}

export const WithHelptext: Story = {
  render: () => (
    <Field>
      <Label>Med hjelpetekst</Label>
      <Field.Description>Skriv inn fornavnet ditt</Field.Description>
      <Input placeholder='Ola' />
    </Field>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <Field>
      <Label>Kun lesbar</Label>
      <Input readOnly value='12345678901' />
    </Field>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field>
      <Label>Fødselsnummer</Label>
      <Input disabled value='12345678901' />
    </Field>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '20rem' }}>
      <Field>
        <Label>Med hjelpetekst</Label>
        <Field.Description>Skriv inn fornavnet ditt</Field.Description>
        <Input placeholder='Ola' />
      </Field>
    </div>
  ),
}
