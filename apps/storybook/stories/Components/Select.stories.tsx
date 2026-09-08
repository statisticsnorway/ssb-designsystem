import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Divider, Label, Select } from '@statisticsnorway/design-react'

const meta: Meta<typeof Select> = {
  title: 'Komponenter/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Velg et fjell</Label>
      <Select defaultValue=''>
        <Select.Option value='' disabled>
          Velg et fjell &hellip;
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

export const Group: Story = {
  render: () => (
    <Field>
      <Label>Velg en park</Label>
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
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <Field>
      <Label>Velg et fjell</Label>
      <Select aria-readonly value='everest'>
        <Select.Option value='everest'>Mount Everest</Select.Option>
      </Select>
    </Field>
  ),
}
