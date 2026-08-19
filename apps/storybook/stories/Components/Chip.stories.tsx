import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from '@statisticsnorway/design-react'

const meta: Meta<typeof Chip.Checkbox> = {
  title: 'Komponenter/Chip',
  component: Chip.Checkbox,
}

export default meta

type Story = StoryObj<typeof Chip.Checkbox>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <Chip.Radio name='nn' value='nynorsk' defaultChecked>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio name='nb' value='bokmål'>
        Bokmål
      </Chip.Radio>
    </div>
  ),
}

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '0.75rem' }}>
    <Chip.Radio name='small' value='nynorsk' defaultChecked data-size='sm'>
      Small
    </Chip.Radio>
    <Chip.Radio name='medium' value='nynorsk' data-size='md'>
      Medium
    </Chip.Radio>
    <Chip.Radio name='large' value='nynorsk' data-size='lg'>
      Large
    </Chip.Radio>
  </div>
)

export const ChipCheckbox = () => (
  <div style={{ display: 'flex', gap: '0.75rem' }}>
    <Chip.Checkbox name='cb-nn' value='nynorsk' defaultChecked>
      Nynorsk
    </Chip.Checkbox>
    <Chip.Checkbox name='cb-nb' value='bokmål'>
      Bokmål
    </Chip.Checkbox>
  </div>
)

export const ChipRemovable = () => <Chip.Removable aria-label='Fjern Norge'>Norge</Chip.Removable>

export const ChipButton = () => <Chip.Button>Tøm filtre</Chip.Button>
