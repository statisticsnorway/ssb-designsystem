import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider, Field, Label, Search } from '@statisticsnorway/design-react'

const meta: Meta<typeof Search> = {
  title: 'Komponenter/Search',
  component: Search,
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
        <Search.Input type='text' aria-label='Søk' />
        <Search.Clear />
        <Search.Button />
      </Search>

      <Divider />

      <Search>
        <Search.Input type='text' aria-label='Søk' />
        <Search.Clear />
        <Search.Button variant='secondary' />
      </Search>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <Field>
      <Label>Søk etter katter</Label>
      <Search>
        <Search.Input type='text' name='cat-search' />
        <Search.Clear />
        <Search.Button />
      </Search>
    </Field>
  ),
}
