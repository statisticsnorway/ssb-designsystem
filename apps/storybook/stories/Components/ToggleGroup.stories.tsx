import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleGroup, Tooltip } from '@statisticsnorway/design-react'
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof ToggleGroup> = {
  title: 'Komponenter/ToggleGroup',
  component: ToggleGroup,
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
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup aria-label='Filter' defaultValue='innboks'>
      <ToggleGroup.Item value='innboks'>Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value='utkast'>Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value='arkiv'>Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value='sendt'>Sendt</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const OnlyIcons: Story = {
  render: () => (
    <ToggleGroup aria-label='Tekstjustering' defaultValue='option-1'>
      <Tooltip content='Venstrestilt'>
        <ToggleGroup.Item value='option-1'>
          <AlignLeftIcon aria-hidden />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content='Midtstilt'>
        <ToggleGroup.Item value='option-2'>
          <AlignCenterIcon aria-hidden />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content='Høyrestilt'>
        <ToggleGroup.Item value='option-3'>
          <AlignRightIcon aria-hidden />
        </ToggleGroup.Item>
      </Tooltip>
    </ToggleGroup>
  ),
}

export const Secondary: Story = {
  render: () => (
    <ToggleGroup aria-label='Filter' defaultValue='innboks' variant='secondary'>
      <ToggleGroup.Item value='innboks'>Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value='utkast'>Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value='arkiv'>Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value='sendt'>Sendt</ToggleGroup.Item>
    </ToggleGroup>
  ),
}
