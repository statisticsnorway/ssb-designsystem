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
    <EXPERIMENTAL_AvatarStack
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
    </EXPERIMENTAL_AvatarStack>
  ),
}
