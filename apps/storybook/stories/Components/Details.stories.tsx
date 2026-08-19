import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, Details } from '@statisticsnorway/design-react'

const meta: Meta<typeof Details> = {
  title: 'Komponenter/Details',
  component: Details,
}

export default meta

type Story = StoryObj<typeof Details>

export const Default: Story = {
  render: () => (
    <Details>
      <Details.Summary>Mer informasjon</Details.Summary>
      <Details.Content>Dette er skjult innhold som vises når brukeren åpner komponenten.</Details.Content>
    </Details>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
      <Details data-size='sm'>
        <Details.Summary>Small</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
      <Details data-size='md'>
        <Details.Summary>Medium</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
      <Details data-size='lg'>
        <Details.Summary>Large</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
      <Details data-color='primary'>
        <Details.Summary>Primary</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
      <Details data-color='secondary'>
        <Details.Summary>Secondary</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
      <Details data-color='neutral'>
        <Details.Summary>Neutral</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
      <Details data-color='primary' data-variant='tinted'>
        <Details.Summary>Primary - Tinted</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
      <Details data-color='secondary' data-variant='tinted'>
        <Details.Summary>Secondary - Tinted</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
      <Details data-color='neutral' data-variant='tinted'>
        <Details.Summary>Neutral - Tinted</Details.Summary>
        <Details.Content>Dette er standard visning uten ramme.</Details.Content>
      </Details>
    </div>
  ),
}

export const CardVariant: Story = {
  render: () => (
    <Card>
      <Details>
        <Details.Summary>Mer informasjon</Details.Summary>
        <Details.Content>Dette er en variant med bakgrunn og ramme.</Details.Content>
      </Details>
    </Card>
  ),
}

export const OpenDetail: Story = {
  render: () => (
    <Details defaultOpen>
      <Details.Summary>Åpen som standard</Details.Summary>
      <Details.Content>Dette eksempelet er åpnet som standard.</Details.Content>
    </Details>
  ),
}
