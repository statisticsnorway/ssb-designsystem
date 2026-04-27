import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { Button, Dialog, Heading, Paragraph } from '@statisticsnorway/design-react'

const description = `
Det er to typer dialoger, en modal og en ikke-modal.
En modal dialog tvinger brukerne til å ta stilling til noe før de kan fortsette å bruke siden. 
En ikke-modal dialog lar brukerne fortsette å bruke siden, selv om dialogen er åpen.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/dialog/overview
`

const meta: Meta<typeof Dialog> = {
  title: 'Digdir/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog.TriggerContext>
      <Dialog.Trigger>Åpne modal dialog</Dialog.Trigger>
      <Dialog>
        <Heading level={2} data-size='sm'>
          Modal dialog
        </Heading>
        <Paragraph style={{ marginBottom: '1rem' }}>Denne dialogen blokkerer resten av siden til den lukkes.</Paragraph>
        <Button data-command='close'>Lukk</Button>
      </Dialog>
    </Dialog.TriggerContext>
  ),
}

const NonModalExample = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <div style={{ display: 'grid', gap: '0.75rem', justifyItems: 'start' }}>
      <Heading level={3} data-size='xs'>
        Ikke-modal
      </Heading>
      <Button onClick={() => dialogRef.current?.show()}>Åpne ikke-modal dialog</Button>

      <Dialog ref={dialogRef} modal={false}>
        <Heading level={2} data-size='sm'>
          Ikke-modal dialog
        </Heading>
        <Paragraph style={{ marginBottom: '1rem' }}>Denne dialogen lar deg fortsatt samhandle med siden bak.</Paragraph>
        <Button onClick={() => dialogRef.current?.close()}>Lukk</Button>
      </Dialog>
    </div>
  )
}

const DrawerExample = () => {
  const [modal] = useState(true)

  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'start' }}>
      <Heading level={3} data-size='xs'>
        Dialog som drawer
      </Heading>

      <Dialog.TriggerContext>
        <Dialog.Trigger>Åpne dialog med plassering</Dialog.Trigger>
        <Dialog modal={modal} closedby='any' placement='right' style={{ zIndex: '10' }}>
          <Dialog.Block>
            <Paragraph>
              Dette er en {modal ? 'modal' : 'ikke-modal'} dialog med <code>placement="right"</code>.
            </Paragraph>
          </Dialog.Block>
        </Dialog>
      </Dialog.TriggerContext>
    </div>
  )
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', justifyItems: 'start' }}>
      <NonModalExample />
      <DrawerExample />
    </div>
  ),
}
