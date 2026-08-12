import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@statisticsnorway/design-react'
import { BriefcaseIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Avatar> = {
  title: 'Komponenter/Avatar',
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => <Avatar aria-label='Ola Nordmann' variant='circle' />,
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar data-size='xs' aria-label='extra small' initials='xs' />
      <Avatar data-size='sm' aria-label='small' initials='sm' />
      <Avatar data-size='md' aria-label='medium' initials='md' />
      <Avatar data-size='lg' aria-label='large' initials='lg' />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar aria-label='color default' />
      <Avatar aria-label='color secondary' data-color='secondary' />
      <Avatar aria-label='color magic' data-color='magic' />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar variant='circle' aria-label='variant circle' />
      <Avatar variant='square' aria-label='variant square' />
      <Avatar variant='circle' aria-label='Ola Nordmann' initials='ON' />
      <Avatar variant='square' aria-label='Ola Nordmann'>
        ON
      </Avatar>
    </div>
  ),
}

export const WithPicture: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar aria-label='Ola Nordmann'>
        <img src='/img/animals/cat-portrait.jpg' alt='' />
      </Avatar>
      <Avatar aria-label='Ola Nordmann'>
        <BriefcaseIcon />
      </Avatar>
    </div>
  ),
}
