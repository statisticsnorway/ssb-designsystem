import type { Meta, StoryObj } from '@storybook/react'
import { Heading, List } from '@digdir/designsystemet-react'

const description = `
List brukes for å presentere innhold på en oversiktlig og strukturert måtes.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/list/overview
`

const meta: Meta<typeof List.Unordered> = {
  title: 'Digdir/List',
  component: List.Unordered,
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
    <List.Unordered>
      <List.Item>Brød</List.Item>
      <List.Item>Melk</List.Item>
      <List.Item>Egg</List.Item>
    </List.Unordered>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Usortert liste
        </Heading>
        <List.Unordered>
          <List.Item>Brød</List.Item>
          <List.Item>Melk</List.Item>
          <List.Item>Egg</List.Item>
        </List.Unordered>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Sortert liste
        </Heading>
        <List.Ordered>
          <List.Item>Forvarm ovnen</List.Item>
          <List.Item>Sett inn formen</List.Item>
          <List.Item>Stek i 20 minutter</List.Item>
        </List.Ordered>
      </div>
    </div>
  ),
}
