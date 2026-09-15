import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Label, Textarea } from '@statisticsnorway/design-react'

const meta: Meta<typeof Textarea> = {
  title: 'Komponenter/Textarea',
  component: Textarea,
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
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Label htmlFor='my-textarea'>Label</Label>
      <Textarea id='my-textarea' />
    </>
  ),
}

export const WidthHeight: Story = {
  render: () => (
    <Field>
      <Label htmlFor='my-textarea-rows'>Beskrivelse</Label>
      <Textarea id='my-textarea-rows' cols={40} rows={6} />
    </Field>
  ),
}
