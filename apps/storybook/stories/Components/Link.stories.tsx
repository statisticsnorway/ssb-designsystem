import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link, Paragraph } from '@statisticsnorway/design-react'
import { Chat2Icon } from '@navikt/aksel-icons'

const meta: Meta<typeof Link> = {
  title: 'Komponenter/Link',
  component: Link,
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  render: () => <Link href=''>Standard lenke</Link>,
}

export const WithIcon: Story = {
  render: () => (
    <Link href=''>
      <Chat2Icon aria-hidden height='1.5rem' width='1.5rem' />
      <span>Lenke med ikon</span>
    </Link>
  ),
}

export const InText: Story = {
  render: () => (
    <Paragraph>
      Lenke til <Link href=''>designsystemet.no</Link> i tekst
    </Paragraph>
  ),
}

export const Neutral: Story = {
  render: () => (
    <Link href='' data-color='neutral'>
      Lenke med nøytral farge
    </Link>
  ),
}
