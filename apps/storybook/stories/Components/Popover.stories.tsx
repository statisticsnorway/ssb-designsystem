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
    <Popover.TriggerContext>
      <Popover.Trigger>Åpne popover</Popover.Trigger>
      <Popover placement='top'>
        Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.
      </Popover>
    </Popover.TriggerContext>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Popover.TriggerContext>
      <Popover.Trigger data-color='danger' aria-label='Slett rad'>
        <TrashIcon title='Slett rad' />
      </Popover.Trigger>
      <Popover data-color='danger'>
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
    </Popover.TriggerContext>
  ),
}

export const DottedUnderline: Story = {
  render: () => (
    <Popover.TriggerContext>
      <Paragraph>
        Vi bruker <Popover.Trigger inline>design tokens</Popover.Trigger> for å sikre at vi har en konsistent design.
      </Paragraph>
      <Popover data-color='neutral'>
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
    </Popover.TriggerContext>
  ),
}

export const Placement: Story = {
  render: () => (
    <>
      <Popover.TriggerContext>
        <Popover.Trigger>Top</Popover.Trigger>
        <Popover placement='top'>
          <Paragraph>Vises over knappen</Paragraph>
        </Popover>
      </Popover.TriggerContext>

      <Popover.TriggerContext>
        <Popover.Trigger>Bottom</Popover.Trigger>
        <Popover placement='bottom'>
          <Paragraph>Vises under knappen</Paragraph>
        </Popover>
      </Popover.TriggerContext>

      <Popover.TriggerContext>
        <Popover.Trigger>Left</Popover.Trigger>
        <Popover placement='left'>
          <Paragraph>Vises til venstre</Paragraph>
        </Popover>
      </Popover.TriggerContext>

      <Popover.TriggerContext>
        <Popover.Trigger>Right</Popover.Trigger>
        <Popover placement='right'>
          <Paragraph>Vises til høyre</Paragraph>
        </Popover>
      </Popover.TriggerContext>
    </>
  ),
}

export const Variant: Story = {
  render: () => (
    <>
      <Popover.TriggerContext>
        <Popover.Trigger variant='primary'>Primary</Popover.Trigger>
        <Popover placement='top'>
          Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.
        </Popover>
      </Popover.TriggerContext>

      <Popover.TriggerContext>
        <Popover.Trigger variant='secondary'>Secondary</Popover.Trigger>
        <Popover placement='top'>
          Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.
        </Popover>
      </Popover.TriggerContext>

      <Popover.TriggerContext>
        <Popover.Trigger variant='tertiary'>Tertiary</Popover.Trigger>
        <Popover placement='top'>
          Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.
        </Popover>
      </Popover.TriggerContext>

      <Popover.TriggerContext>
        <Popover.Trigger>Tinted Popover</Popover.Trigger>
        <Popover variant='tinted'>
          Popoveret gir en rask beskjed. Her kan du vise brukeren informasjon som er relevant for konteksten.
        </Popover>
      </Popover.TriggerContext>
    </>
  ),
}
