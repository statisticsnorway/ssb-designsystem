import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, EXPERIMENTAL_FileUpload, Field, Label } from '@statisticsnorway/design-react'

const meta: Meta<typeof EXPERIMENTAL_FileUpload> = {
  title: 'Komponenter/FileUpload',
  component: EXPERIMENTAL_FileUpload,
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
type Story = StoryObj<typeof EXPERIMENTAL_FileUpload>

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Last opp profilbilde</Label>
      <Field.Description>beskrivelsestekst</Field.Description>
      <EXPERIMENTAL_FileUpload>
        <Field.Description>Slipp fil her</Field.Description>
        <Field.Description>Filen må være i csv-format og mindre enn 2MB</Field.Description>
        <Button asChild data-variant='secondary'>
          <span>Last opp fil</span>
        </Button>
        <input type='file' />
      </EXPERIMENTAL_FileUpload>
    </Field>
  ),
}
