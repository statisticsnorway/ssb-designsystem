import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Heading, Paragraph, Popover } from '@statisticsnorway/design-react'
import { TrashIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Popover> = {
  title: 'Komponenter/Popover',
  component: Popover,
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
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <>
      <Button popovertarget='defaul-popover'>Åpne popover</Button>
      <Popover id='defaul-popover' placement='top'>
        Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.
      </Popover>
    </>
  ),
}

export const Interactive: Story = {
  render: () => (
    <>
      <Button data-color='danger' aria-label='Slett rad' popovertarget='interactive-popover'>
        <TrashIcon title='Slett rad' />
      </Button>
      <Popover id='interactive-popover' data-color='danger'>
        <Paragraph>Er du sikker på at du vil slette raden? Handlingen kan ikke angres.</Paragraph>
        <div
          style={{
            display: 'flex',
            gap: 'var(--ds-size-2)',
            marginTop: 'var(--ds-size-2)',
          }}
        >
          <Button data-size='sm'>Ja, slett den</Button>
          <Button data-size='sm' variant='tertiary'>
            Avbryt
          </Button>
        </div>
      </Popover>
    </>
  ),
}

export const DottedUnderline: Story = {
  render: () => (
    <>
      <Paragraph>
        Vi bruker{' '}
        <Button popovertarget='inline-popover' data-popover='inline'>
          design tokens
        </Button>{' '}
        for å sikre at vi har en konsistent design.
      </Paragraph>
      <Popover id='inline-popover' data-color='neutral'>
        <Paragraph>
          <strong
            style={{
              display: 'block',
            }}
          >
            Design tokens
          </strong>
          <span>Design tokens er en samling av variabler som definerer designet i et designsystem.</span>
        </Paragraph>
      </Popover>
    </>
  ),
}

export const Placement: Story = {
  render: () => (
    <>
      <>
        <Button popoverTarget='popover-top'>Top</Button>
        <Popover id='popover-top' placement='top'>
          <Paragraph>Vises over knappen</Paragraph>
        </Popover>
      </>

      <>
        <Button popoverTarget='popover-bottom'>Bottom</Button>
        <Popover id='popover-bottom' placement='bottom'>
          <Paragraph>Vises under knappen</Paragraph>
        </Popover>
      </>

      <>
        <Button popoverTarget='popover-left'>Left</Button>
        <Popover id='popover-left' placement='left'>
          <Paragraph>Vises til venstre</Paragraph>
        </Popover>
      </>

      <>
        <Button popoverTarget='popover-right'>Right</Button>
        <Popover id='popover-right' placement='right'>
          <Paragraph>Vises til høyre</Paragraph>
        </Popover>
      </>
    </>
  ),
}
