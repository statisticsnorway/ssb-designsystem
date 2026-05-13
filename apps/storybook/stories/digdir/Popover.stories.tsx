import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Paragraph, Popover } from '@statisticsnorway/design-react'
import { TrashIcon } from '@navikt/aksel-icons'

const description = `
Popover vises over andre elementer i grensesnittet og er koblet til et spesifikt element.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/popover/overview
`

const meta: Meta<typeof Popover> = {
  title: 'Digdir/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover.TriggerContext>
      <Popover.Trigger>Vis informasjon</Popover.Trigger>

      <Popover>
        <Heading level={2} data-size='xs'>
          Informasjon
        </Heading>
        <Paragraph>Dette er en enkel popover med litt tekst.</Paragraph>
      </Popover>
    </Popover.TriggerContext>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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

        <Popover.TriggerContext>
          <Popover.Trigger data-color='danger' aria-label='Slett rad'>
            <TrashIcon title='Slett rad' />
          </Popover.Trigger>
          <Popover data-color='danger'>
            <Paragraph>Er du sikker på at du vil slette raden? Handlingen kan ikke angres.</Paragraph>
          </Popover>
        </Popover.TriggerContext>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Ordforklaring
        </Heading>

        <Popover.TriggerContext>
          <Paragraph>
            Vi bruker <Popover.Trigger inline>ordforklaring</Popover.Trigger> for å forklare noen ord i teksten.
          </Paragraph>

          <Popover data-color='neutral'>
            <Paragraph>
              <strong style={{ display: 'block' }}>Ordforklaring</strong>
              <span>
                Orforklaring er en type popover som brukes til å forklare betydningen av et ord eller uttrykk i teksten.
              </span>
            </Paragraph>
          </Popover>
        </Popover.TriggerContext>
      </div>
    </>
  ),
}
