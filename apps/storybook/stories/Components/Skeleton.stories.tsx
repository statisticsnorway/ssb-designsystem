import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider, Heading, Paragraph, Skeleton } from '@statisticsnorway/design-react'

const meta: Meta<typeof Skeleton> = {
  title: 'Komponenter/Skeleton',
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton width={200} height={100} />,
}

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <Skeleton variant='circle' width='50px' height='50px' />
      <Skeleton variant='rectangle' width='100px' height='50px' />
      <Paragraph>
        <Skeleton variant='text' width='10' />
      </Paragraph>
    </div>
  ),
}

export const Example: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem', maxWidth: '28rem' }}>
      <Skeleton height='150px' />
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          padding: '5px 0',
        }}
      >
        <Skeleton variant='circle' width='30px' height='30px' />
        <Heading level={3} data-size='sm'>
          <Skeleton variant='text'>En medium tittel</Skeleton>
        </Heading>
      </div>
      <Skeleton variant='text' width={140} />
    </div>
  ),
}

export const ExampleText: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 1 200px' }}>
        <Heading>En tittel</Heading>
        <Paragraph data-size='sm'>Her er en paragraf som går over flere linjer</Paragraph>
      </div>
      <div style={{ flex: '1 1 200px' }}>
        <Heading>
          <Skeleton variant='text'>En tittel</Skeleton>
        </Heading>
        <Paragraph data-size='sm'>
          <Skeleton variant='text' width={40} />
        </Paragraph>
      </div>
    </div>
  ),
}
