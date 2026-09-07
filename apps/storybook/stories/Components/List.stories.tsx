import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, List } from '@statisticsnorway/design-react'

const meta: Meta<typeof List.Unordered> = {
  title: 'Komponenter/List',
  component: List.Unordered,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <List.Unordered>
      <List.Item>Bøyabreen</List.Item>
      <List.Item>Briksdalsbreen</List.Item>
      <List.Item>Nigardsbreen</List.Item>
    </List.Unordered>
  ),
}

export const Ordered: Story = {
  render: () => (
    <>
      <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
        Sortert liste
      </Heading>
      <List.Ordered>
        <List.Item>Forvarm ovnen</List.Item>
        <List.Item>Sett inn formen</List.Item>
        <List.Item>Stek i 20 minutter</List.Item>
      </List.Ordered>
    </>
  ),
}
