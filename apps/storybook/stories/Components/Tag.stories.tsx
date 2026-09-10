import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from '@statisticsnorway/design-react'
import { RobotIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Tag> = {
  title: 'Komponenter/Tag',
  component: Tag,
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
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  render: () => <Tag>Ny</Tag>,
}

export const Colors: Story = {
  render: () => (
    <>
      <Tag data-color='primary'>Primary</Tag>
      <Tag data-color='secondary'>Secondary</Tag>
      <Tag data-color='magic'>Magic</Tag>
      <Tag data-color='neutral'>Neutral</Tag>
      <Tag data-color='info'>Info</Tag>
      <Tag data-color='success'>Success</Tag>
      <Tag data-color='warning'>Warning</Tag>
      <Tag data-color='danger'>Danger</Tag>
    </>
  ),
}

export const Outline: Story = {
  render: () => (
    <>
      <Tag data-color='primary' variant='outline'>
        Primary
      </Tag>
      <Tag data-color='secondary' variant='outline'>
        Secondary
      </Tag>
      <Tag data-color='magic' variant='outline'>
        Magic
      </Tag>
      <Tag data-color='neutral' variant='outline'>
        Neutral
      </Tag>
      <Tag data-color='info' variant='outline'>
        Info
      </Tag>
      <Tag data-color='success' variant='outline'>
        Success
      </Tag>
      <Tag data-color='warning' variant='outline'>
        Warning
      </Tag>
      <Tag data-color='danger' variant='outline'>
        Danger
      </Tag>
    </>
  ),
}

export const Size: Story = {
  render: () => (
    <>
      <Tag data-size='sm'>Small</Tag>
      <Tag data-size='md'>Medium</Tag>
      <Tag data-size='lg'>Large</Tag>
    </>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Tag data-color='neutral' data-size='md' style={{ paddingInlineStart: 'var(--ds-size-1)' }}>
      <RobotIcon aria-hidden style={{ marginInlineEnd: 'var(--ds-size-1)' }} />
      KI-generert
    </Tag>
  ),
}
