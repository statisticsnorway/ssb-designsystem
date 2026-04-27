import type { Meta, StoryObj } from '@storybook/react'
import { Link, Paragraph } from '@statisticsnorway/design-react'
import { Chat2Icon } from '@navikt/aksel-icons'

const description = `
Link er klikkbar tekst eller grafikk som tar brukeren videre til andre sider eller dokumenter.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/link/overview
`

const meta: Meta<typeof Link> = {
  title: 'Digdir/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  render: () => <Link href=''>Standard lenke</Link>,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div>
        <Link href=''>Standard lenke</Link>
      </div>

      <div>
        <Link href=''>
          <Chat2Icon aria-hidden height='1.5rem' width='1.5rem' />
          <span>Lenke med ikon</span>
        </Link>
      </div>

      <Paragraph>
        Lenke til <Link href=''>designsystemet.no</Link> i tekst
      </Paragraph>
    </div>
  ),
}
