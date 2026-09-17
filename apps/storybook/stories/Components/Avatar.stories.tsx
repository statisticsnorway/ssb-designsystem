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
      <Avatar data-size='xs' aria-label='extra small'>
        xs
      </Avatar>
      <Avatar data-size='sm' aria-label='small'>
        sm
      </Avatar>
      <Avatar data-size='md' aria-label='medium'>
        md
      </Avatar>
      <Avatar data-size='lg' aria-label='large'>
        lg
      </Avatar>
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
      <Avatar aria-label='variant circle' />
      <Avatar variant='square' aria-label='variant square' />
      <Avatar aria-label='Ola Nordmann'>ON</Avatar>
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
