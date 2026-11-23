import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarStack } from '@statisticsnorway/design-react'
import { BriefcaseIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof AvatarStack> = {
  title: 'Komponenter/AvatarStack',
  component: AvatarStack,
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

type Story = StoryObj<typeof AvatarStack>

export const Default: Story = {
  render: () => (
    <AvatarStack>
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
    </AvatarStack>
  ),
}

export const Variants: Story = {
  render: () => (
    <AvatarStack
      aria-label='example of square avatars'
      style={
        {
          '--dsc-avatar-stack-radius': 'var(--ds-border-radius-md)',
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
    </AvatarStack>
  ),
}
