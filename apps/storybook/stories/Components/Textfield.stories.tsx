import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag, Textfield } from '@statisticsnorway/design-react'

const meta: Meta<typeof Textfield> = {
  title: 'Komponenter/Textfield',
  component: Textfield,
}

export default meta
type Story = StoryObj<typeof Textfield>

export const Default: Story = {
  render: () => <Textfield label='Label' />,
}

export const Required: Story = {
  render: () => (
    <Textfield
      label={
        <>
          Hvor bor du?
          <Tag data-color='warning' style={{ marginInlineStart: 'var(--ds-size-2)' }}>
            Må fylles ut
          </Tag>
        </>
      }
      required
    />
  ),
}

export const Multiline: Story = {
  render: () => <Textfield label='Label' multiline rows={4} />,
}

export const Prefix: Story = {
  render: () => <Textfield label='Med prefiks og suffiks' prefix='NOK' suffix='pr. mnd' />,
}

export const Counter: Story = {
  render: () => {
    return <Textfield counter={75} id='textfield-counter' label='Legg til en beskrivelse' multiline rows={4} />
  },
}
