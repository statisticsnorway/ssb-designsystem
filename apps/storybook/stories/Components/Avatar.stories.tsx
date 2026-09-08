import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@statisticsnorway/design-react'
import { BriefcaseIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Avatar> = {
  title: 'Komponenter/Avatar',
  component: Avatar,
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

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => <Avatar aria-label='Ola Nordmann' />,
}

export const Sizes: Story = {
  render: () => (
    <>
      <Avatar data-size='xs' aria-label='extra small' initials='xs' />
      <Avatar data-size='sm' aria-label='small' initials='sm' />
      <Avatar data-size='md' aria-label='medium' initials='md' />
      <Avatar data-size='lg' aria-label='large' initials='lg' />
    </>
  ),
}

export const Colors: Story = {
  render: () => (
    <>
      <Avatar aria-label='color default' />
      <Avatar aria-label='color secondary' data-color='secondary' />
      <Avatar aria-label='color magic' data-color='magic' />
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <Avatar variant='circle' aria-label='variant circle' />
      <Avatar variant='square' aria-label='variant square' />
      <Avatar variant='circle' aria-label='Ola Nordmann'>
        ON
      </Avatar>
      <Avatar variant='square' aria-label='Ola Nordmann'>
        ON
      </Avatar>
    </>
  ),
}

export const WithPicture: Story = {
  render: () => (
    <>
      <Avatar aria-label='Ola Nordmann'>
        <img src='/img/animals/cat-portrait.jpg' alt='' />
      </Avatar>
      <Avatar aria-label='Ola Nordmann'>
        <BriefcaseIcon />
      </Avatar>
    </>
  ),
}
