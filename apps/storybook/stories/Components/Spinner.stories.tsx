import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Paragraph, Spinner } from '@statisticsnorway/design-react'

const meta: Meta<typeof Spinner> = {
  title: 'Komponenter/Spinner',
  component: Spinner,
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
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  render: () => <Spinner aria-label='Laster...' />,
}

export const Size: Story = {
  render: () => (
    <>
      <Spinner aria-label='Henter kaffi' data-size='2xs' />
      <Spinner aria-label='Henter kaffi' data-size='xs' />
      <Spinner aria-label='Henter kaffi' data-size='sm' />
      <Spinner aria-label='Henter kaffi' data-size='md' />
      <Spinner aria-label='Henter kaffi' data-size='lg' />
      <Spinner aria-label='Henter kaffi' data-size='xl' />
    </>
  ),
}

export const Text: Story = {
  render: () => (
    <>
      <Spinner aria-label='Laster...' data-size='sm' />
      <Paragraph>Laster inn data...</Paragraph>
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Størrelser
        </Heading>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Spinner data-size='2xs' aria-label='Laster...' />
          <Spinner data-size='xs' aria-label='Laster...' />
          <Spinner data-size='sm' aria-label='Laster...' />
          <Spinner data-size='md' aria-label='Laster...' />
          <Spinner data-size='lg' aria-label='Laster...' />
          <Spinner data-size='xl' aria-label='Laster...' />
        </div>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Med tekst
        </Heading>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Spinner aria-label='Laster...' data-size='sm' />
          <Paragraph>Laster inn data...</Paragraph>
        </div>
      </div>
    </div>
  ),
}
