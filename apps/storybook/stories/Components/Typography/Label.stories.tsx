import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@statisticsnorway/design-react'

const meta: Meta<typeof Label> = {
  title: 'Komponenter/Typography/Label',
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => <Label>Fødselsnummer (11 sifre)</Label>,
}

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Label weight='regular'>Regular weight</Label>
      <Label weight='medium'>Medium weight</Label>
      <Label weight='semibold'>Semibold weight</Label>
    </div>
  ),
}
