import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@statisticsnorway/design-react'
import { PencilWritingIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Button> = {
  title: 'Komponenter/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button>Knapp</Button>,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='tertiary'>Tertiary</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button data-size='sm'>Small</Button>
      <Button data-size='md'>Medium</Button>
      <Button data-size='lg'>Large</Button>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Primær</Button>
        <Button data-color='secondary'>Sekundær</Button>
        <Button data-color='danger'>Danger</Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant='secondary'>Primær</Button>
        <Button variant='secondary' data-color='secondary'>
          Sekundær
        </Button>
        <Button variant='secondary' data-color='danger'>
          Danger
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant='tertiary'>Primær</Button>
        <Button variant='tertiary' data-color='secondary'>
          Sekundær
        </Button>
        <Button variant='tertiary' data-color='danger'>
          Danger
        </Button>
      </div>
    </div>
  ),
}

export const Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button icon aria-label='Kun ikon'>
          <PencilWritingIcon aria-hidden />
        </Button>
        <Button>
          <PencilWritingIcon aria-hidden />
          Rediger
        </Button>
      </div>
    </div>
  ),
}

export const WithSpinner: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant='primary' loading>
        Laster…
      </Button>
      <Button variant='secondary' loading>
        Laster…
      </Button>
      <Button variant='tertiary' loading>
        Laster…
      </Button>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Button asChild>
        <a target='_blank' rel='noreferrer' href='www.designsystemet.no'>
          Gå til designsystemet.no
        </a>
      </Button>
    </div>
  ),
}
