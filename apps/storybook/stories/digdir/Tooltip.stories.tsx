import type { Meta, StoryObj } from '@storybook/react'
import { Button, Divider, Heading, Tooltip } from '@digdir/designsystemet-react'
import { FilesIcon } from '@navikt/aksel-icons'

const description = `
Tooltip viser kort informasjon når brukeren holder musepekeren over eller fokuserer på et element.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/tooltip/overview
`

const meta: Meta<typeof Tooltip> = {
  title: 'Digdir/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: description,
      },
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

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Med tekst
        </Heading>

        <Tooltip content='Organisasjonsnummer'>Org.nr.</Tooltip>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Plassering
        </Heading>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tooltip content='Top' placement='top'>
            <Button variant='secondary'>Top</Button>
          </Tooltip>

          <Tooltip content='Bottom' placement='bottom'>
            <Button variant='secondary'>Bottom</Button>
          </Tooltip>

          <Tooltip content='Left' placement='left'>
            <Button variant='secondary'>Left</Button>
          </Tooltip>

          <Tooltip content='Right' placement='right'>
            <Button variant='secondary'>Right</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
}
