import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Label, Select } from '@statisticsnorway/design-react'

const description = `
Select lar brukeren velge ett alternativ fra en liste.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/select/overview
`

const meta: Meta<typeof Select> = {
  title: 'Digdir/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Velg et fjell</Label>
      <Select defaultValue=''>
        <Select.Option value='' disabled>
          Velg et fjell …
        </Select.Option>
        <Select.Option value='everest'>Mount Everest</Select.Option>
        <Select.Option value='aconcagua'>Aconcagua</Select.Option>
        <Select.Option value='denali'>Denali</Select.Option>
        <Select.Option value='kilimanjaro'>Kilimanjaro</Select.Option>
        <Select.Option value='elbrus'>Elbrus</Select.Option>
        <Select.Option value='vinson'>Mount Vinson</Select.Option>
        <Select.Option value='puncakjaya'>Puncak Jaya</Select.Option>
        <Select.Option value='kosciuszko'>Mount Kosciuszko</Select.Option>
      </Select>
    </Field>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', maxWidth: '28rem' }}>
      <div>
        <Label style={{ display: 'block', marginBottom: '0.5rem' }}>Med gruppering</Label>
        <Field>
          <Select>
            <Select.Optgroup label='Grünerløkka'>
              <Select.Option value='sofienbergparken'>Sofienbergparken</Select.Option>
              <Select.Option value='birkelunden'>Birkelunden</Select.Option>
              <Select.Option value='olafryesplass'>Olaf Ryes plass</Select.Option>
            </Select.Optgroup>
            <Select.Optgroup label='Sentrum'>
              <Select.Option value='slottsparken'>Slottsparken</Select.Option>
              <Select.Option value='studenterlunden'>Studenterlunden</Select.Option>
            </Select.Optgroup>
            <Select.Optgroup label='Gamle Oslo'>
              <Select.Option value='botsparken'>Botsparken</Select.Option>
              <Select.Option value='klosterenga'>Klosterenga park</Select.Option>
            </Select.Optgroup>
          </Select>
        </Field>
      </div>

      <div>
        <Field>
          <Label>Kun lesbar</Label>
          <Select aria-readonly value='everest'>
            <Select.Option value='everest'>Mount Everest</Select.Option>
          </Select>
        </Field>
      </div>
    </div>
  ),
}
