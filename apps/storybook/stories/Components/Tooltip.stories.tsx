import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Tooltip } from '@statisticsnorway/design-react'
import { FilesIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Tooltip> = {
  title: 'Komponenter/Tooltip',
  component: Tooltip,
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
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content='Kopier' placement='top'>
      <Button icon aria-label='Kopier'>
        <FilesIcon aria-hidden />
      </Button>
    </Tooltip>
  ),
}

export const WithString: Story = {
  render: () => <Tooltip content='Organisasjonsnummer'>Org.nr.</Tooltip>,
}

export const Placement: Story = {
  render: () => (
    <Tooltip content='Kopier' placement='bottom'>
      <Button icon aria-label='Kopier'>
        <FilesIcon aria-hidden />
      </Button>
    </Tooltip>
  ),
}
