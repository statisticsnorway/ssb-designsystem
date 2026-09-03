import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Checkbox,
  Fieldset,
  Field,
  Input,
  Label,
  Radio,
  Select,
  Textfield,
  ValidationMessage,
} from '@statisticsnorway/design-react'

const meta: Meta<typeof Fieldset> = {
  title: 'Komponenter/Fieldset',
  component: Fieldset,
}

export default meta
type Story = StoryObj<typeof Fieldset>

export const Default: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Hvilken fjordarm bor du ved?</Fieldset.Legend>
      <Fieldset.Description>Valget vil hjelpe oss å forbedre innholdet vi viser deg.</Fieldset.Description>
      <Radio label='Barsnesfjorden' name='radio' value='barsnesfjorden' />
      <Radio label='Eidsfjorden' name='radio' value='eidsfjorden' />
      <Radio label='Ingen av de' name='radio' value='ingen-av-de' />
    </Fieldset>
  ),
}

export const CheckboxRadio: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Godtar du vilkårene?</Fieldset.Legend>
      <Checkbox label='Ja, jeg godtar' value='agree' />
    </Fieldset>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Godtar du vilkårene?</Fieldset.Legend>
      <Checkbox label='Ja, jeg godtar' value='agree' />
      <ValidationMessage>Du må godta villkårene</ValidationMessage>
    </Fieldset>
  ),
}

export const WithFields: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Personopplysninger</Fieldset.Legend>
      <Fieldset.Description>Fyll inn dine personopplysninger nedenfor.</Fieldset.Description>
      <Field>
        <Label>Fornavn</Label>
        <Input />
      </Field>
      <Field>
        <Label>Kjønn</Label>
        <Select>
          <Select.Option value='male'>Mann</Select.Option>
          <Select.Option value='female'>Kvinne</Select.Option>
          <Select.Option value='other'>Annet</Select.Option>
        </Select>
      </Field>
      <Textfield
        autoComplete='postal-code'
        inputMode='numeric'
        label='Postnummer'
        maxLength={4}
        name='components-fieldset--with-textfield-postal-code'
        size={4}
      />
    </Fieldset>
  ),
}
