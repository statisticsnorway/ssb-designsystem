import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, EXPERIMENTAL_AvatarStack } from '@statisticsnorway/design-react'
import { BriefcaseIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof EXPERIMENTAL_AvatarStack> = {
  title: 'Komponenter/AvatarStack',
  component: EXPERIMENTAL_AvatarStack,
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

type Story = StoryObj<typeof EXPERIMENTAL_AvatarStack>

export const Default: Story = {
  render: () => (
    <EXPERIMENTAL_AvatarStack>
      <li>
        <Avatar aria-label='Cat'>
          <img src='/img/animals/cat-portrait.jpg' alt='' />
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='briefcase'>
          <BriefcaseIcon />
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='Søren Magnussen'>sm</Avatar>
      </li>
      <li>
        <Avatar aria-label='Mark Downright'>md</Avatar>
      </li>
      <li>
        <Avatar aria-label='Ola Nordman'>on</Avatar>
      </li>
    </EXPERIMENTAL_AvatarStack>
  ),
}

export const Variants: Story = {
  render: () => (
    <EXPERIMENTAL_AvatarStack>
      <li>
        <Avatar aria-label='Cat' variant='square'>
          <img src='/img/animals/cat-portrait.jpg' alt='' />
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='briefcase' variant='square'>
          <BriefcaseIcon />
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='Søren Magnussen' variant='square'>
          sm
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='Mark Downright' variant='square'>
          md
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='Ola Nordman' variant='square'>
          on
        </Avatar>
      </li>
    </EXPERIMENTAL_AvatarStack>
  ),
}

export const Size: Story = {
  render: () => (
    <EXPERIMENTAL_AvatarStack
      style={
        {
          '--dsc-avatar-stack-size': 'clamp(5rem, 1.5rem + 2vw, 10rem)',
        } as React.CSSProperties
      }
    >
      <li>
        <Avatar aria-label='Cat'>
          <img src='/img/animals/cat-portrait.jpg' alt='' />
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='briefcase'>
          <BriefcaseIcon />
        </Avatar>
      </li>
      <li>
        <Avatar aria-label='Søren Magnussen'>sm</Avatar>
      </li>
      <li>
        <Avatar aria-label='Mark Downright'>md</Avatar>
      </li>
      <li>
        <Avatar aria-label='Ola Nordman'>on</Avatar>
      </li>
    </EXPERIMENTAL_AvatarStack>
  ),
}

export const Gap: Story = {
  render: () => (
    <EXPERIMENTAL_AvatarStack
      style={
        {
          '--dsc-avatar-stack-gap': '6px',
        } as React.CSSProperties
      }
    >
      <li>
        <Avatar aria-label=''>AA</Avatar>
      </li>
      <li>
        <Avatar aria-label=''>BB</Avatar>
      </li>
      <li>
        <Avatar aria-label=''>CC</Avatar>
      </li>
      <li>
        <Avatar aria-label=''>DD</Avatar>
      </li>
    </EXPERIMENTAL_AvatarStack>
  ),
}
