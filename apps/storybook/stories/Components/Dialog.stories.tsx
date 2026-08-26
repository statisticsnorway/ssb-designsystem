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
    <>
      <Button command='show-modal' commandfor='my-dialog-preview'>
        Åpne modal dialog
      </Button>
      <Dialog id='my-dialog-preview'>
        <Heading level={2} data-size='sm'>
          Modal dialog
        </Heading>
        <Paragraph style={{ marginBottom: '1rem' }}>Denne dialogen blokkerer resten av siden til den lukkes.</Paragraph>
        <Button data-command='close'>Lukk</Button>
      </Dialog>
    </>
  ),
}

export const NonModal: Story = {
  render: () => (
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
  ),
}

export const Drawer: Story = {
  render: () => (
    <>
      <Button command='show-modal' commandfor='my-dialog-drawer'>
        Åpne dialog til høyre
      </Button>
      <Dialog id='my-dialog-drawer' closedby='any' placement='right' style={{ zIndex: '10' }}>
        <Dialog.Block>
          <Paragraph>
            Dette er en modal dialog med <code>placement='right'</code>
          </Paragraph>
        </Dialog.Block>
      </Dialog>
    </>
  ),
}
