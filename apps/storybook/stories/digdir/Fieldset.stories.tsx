import type { Meta, StoryObj } from '@storybook/react'
import { Fieldset, Field, Input, Label, Select } from '@statisticsnorway/design-react'

const description = `
Fieldset brukes til å gruppere og navngi felt som naturlig hører sammen, Fieldset er et sett med Field.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/fieldset/overview
`

const meta: Meta<typeof Fieldset> = {
  title: 'Digdir/Fieldset',
  component: Fieldset,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Fieldset>

export const Default: Story = {
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
    </Fieldset>
  ),
}
