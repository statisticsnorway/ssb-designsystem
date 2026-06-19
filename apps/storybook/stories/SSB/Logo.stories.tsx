import type { Meta, StoryObj } from '@storybook/react-vite'

// Logo is not part of the public API yet.
// Import directly while the component is under development.
import { Logo } from '../../../../packages/react/src/components/Logo/Logo'

const description = `
Logo representerer SSBs visuelle identitet.

Logoen brukes typisk i header og footer, og kan også fungere som lenke til forsiden.

Den skal ikke styre layout selv, men tilpasses konteksten den brukes i.
`

const meta: Meta<typeof Logo> = {
  title: 'SSB/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: '🚧 This component is under development and is not part of the public React package API yet.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

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

export const WhiteLogo: Story = {
  render: () => (
    <div style={{ background: '#1f2937', padding: '2rem' }}>
      <Logo variant='white' />
    </div>
  ),
}
