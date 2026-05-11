import type { Meta, StoryObj } from '@storybook/react'
import { LogoSymbol, Link } from '@statisticsnorway/design-react'

const description = `
Logo representerer SSBs visuelle identitet.

Logoen brukes typisk i header og footer, og kan også fungere som lenke til forsiden.

Den skal ikke styre layout selv, men tilpasses konteksten den brukes i.
`

const meta: Meta<typeof LogoSymbol> = {
  title: 'SSB/Logo/LogoSymbol',
  component: LogoSymbol,
}

export default meta
type Story = StoryObj<typeof LogoSymbol>

export const Default: Story = {
  args: {
    variant: 'black',
    height: 50,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['white', 'black'],
    },
    height: {
      control: { type: 'number' },
    },
  },
}

export const AsLink: Story = {
  render: () => (
    <Link href=''>
      <LogoSymbol height={40} />
    </Link>
  ),
}

export const WhiteLogo: Story = {
  render: () => (
    <div style={{ background: '#1f2937', padding: '2rem' }}>
      <LogoSymbol variant='white' />
    </div>
  ),
}
