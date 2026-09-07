import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider, Paragraph } from '@statisticsnorway/design-react'

const meta: Meta<typeof Divider> = {
  title: 'Komponenter/Divider',
  component: Divider,
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => (
    <>
      <Paragraph>Divider er brukt for å dele opp innhold i mindre deler.</Paragraph>
      <Divider />
      <Paragraph>Den kan også brukes for å skille innhold som er relatert til hverandre.</Paragraph>
    </>
  ),
}
