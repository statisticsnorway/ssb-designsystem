import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ChangeEvent } from 'react'
import {
  Button,
  Checkbox,
  Dialog,
  DialogProps,
  Heading,
  Fieldset,
  Label,
  Paragraph,
  Textarea,
  Radio,
} from '@statisticsnorway/design-react'

const meta: Meta<typeof Dialog> = {
  title: 'Komponenter/Dialog',
  component: Dialog,
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

const NonModalDialog = () => (
  <>
    <Button command='--show-non-modal' commandfor='my-dialog-non-modal'>
      Åpne ikke-modal Dialog
    </Button>
    <Dialog
      id='my-dialog-non-modal'
      modal={false}
      style={{
        zIndex: '10',
        top: 'calc(100vh - 290px)',
        left: 'calc(100vw - 385px)',
        margin: 0,
        maxWidth: '350px',
      }}
    >
      <Heading style={{ marginBottom: 'var(--ds-size-4)' }}>Vi ønsker din mening</Heading>
      <Label htmlFor='my-textarea'>Hvordan var din opplevelse?</Label>
      <Textarea
        id='my-textarea'
        style={{
          marginBottom: 'var(--ds-size-6)',
        }}
      />
      <Button>Send inn</Button>
    </Dialog>
  </>
)

const Drawer = () => {
  const [placement, setPlacement] = useState<DialogProps['placement']>('bottom')
  const [modal, setModal] = useState(true)

  return (
    <>
      <Checkbox
        label='Modal'
        checked={modal}
        style={{ marginBottom: 'var(--ds-size-4)' }}
        onChange={(e) => setModal(e.target.checked)}
      />
      <Fieldset
        onChange={(e: ChangeEvent<HTMLFieldSetElement>) => {
          const target = e.target as unknown as HTMLInputElement
          setPlacement(target.value as DialogProps['placement'])
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--ds-size-5)',
            marginBottom: 'var(--ds-size-8)',
          }}
        >
          <Radio name='drawer' label='Center' value='center' />
          <Radio name='drawer' label='Top' value='top' />
          <Radio name='drawer' label='Bottom' value='bottom' />
          <Radio name='drawer' label='Left' value='left' />
          <Radio name='drawer' label='Right' value='right' />
        </div>
      </Fieldset>
      <Button command={modal ? 'show-modal' : '--show-non-modal'} commandfor='my-dialog-drawer'>
        Open Dialog with command
      </Button>
      <Dialog id='my-dialog-drawer' closedby='any' placement={placement} style={{ zIndex: '10' }}>
        <Dialog.Block>
          <Paragraph>
            This is a {modal ? 'modal' : 'non-modal'} Dialog with <code>placement="{placement}"</code>
          </Paragraph>
        </Dialog.Block>
      </Dialog>
    </>
  )
}

export const NonModal: Story = {
  render: () => <NonModalDialog />,
}

export const DrawerExample: Story = {
  render: () => <Drawer />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', justifyItems: 'start' }}>
      <NonModalDialog />
      <Drawer />
    </div>
  ),
}
