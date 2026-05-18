import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from '@statisticsnorway/design-react'

const description = `
Chip er små, interaktive komponenter som lar brukerne styre hvordan de vil se innhold.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/chip/overview
`

const meta: Meta<typeof Chip.Checkbox> = {
  title: 'Digdir/Chip',
  component: Chip.Checkbox,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Chip.Checkbox>

export const Default: Story = {
  args: {
    children: 'Nynorsk',
  },
}

export const Variants = () => (
  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
    <Chip.Radio name='sprak' value='nynorsk' defaultChecked>
      Nynorsk
    </Chip.Radio>
    <Chip.Radio name='sprak' value='bokmal'>
      Bokmål
    </Chip.Radio>
    <Chip.Checkbox>Oslo</Chip.Checkbox>
    <Chip.Removable aria-label='Fjern Norge'>Norge</Chip.Removable>
    <Chip.Button>Tøm filtre</Chip.Button>
  </div>
)
