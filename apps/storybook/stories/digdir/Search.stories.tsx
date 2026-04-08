import type { Meta, StoryObj } from '@storybook/react'
import { Divider, Field, Label, Search } from '@digdir/designsystemet-react'

const description = `
Search lar brukere raskt finne relevant innhold på et nettsted eller i en applikasjon.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/search/overview
`

const meta: Meta<typeof Search> = {
  title: 'Digdir/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Search>
      <Search.Input aria-label='Søk' />
      <Search.Clear />
      <Search.Button />
    </Search>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', maxWidth: '28rem' }}>
      <Search>
        <Search.Input aria-label='Søk' />
        <Search.Clear />
      </Search>

      <Divider />

      <Search>
        <Search.Input aria-label='Søk' />
        <Search.Clear />
        <Search.Button />
      </Search>

      <Divider />

      <Search>
        <Search.Input aria-label='Søk' />
        <Search.Clear />
        <Search.Button variant='secondary' />
      </Search>

      <Divider />

      <Field>
        <Label>Søk med label</Label>
        <Search>
          <Search.Input aria-label='Søk' />
          <Search.Clear />
          <Search.Button />
        </Search>
      </Field>
    </div>
  ),
}
