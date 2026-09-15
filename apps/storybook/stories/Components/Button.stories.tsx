import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@statisticsnorway/design-react'
import { PencilWritingIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Button> = {
  title: 'Komponenter/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => <Button>Knapp</Button>,
}

export const Variants: Story = {
  render: () => (
    <>
      <Button>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='tertiary'>Tertiary</Button>
    </>
  ),
}

export const Sizes: Story = {
  render: () => (
    <>
      <Button data-size='sm'>Small</Button>
      <Button data-size='md'>Medium</Button>
      <Button data-size='lg'>Large</Button>
    </>
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
    <>
      <Button icon aria-label='Kun ikon'>
        <PencilWritingIcon aria-hidden />
      </Button>
      <Button>
        <PencilWritingIcon aria-hidden />
        Rediger
      </Button>
    </>
  ),
}

export const WithSpinner: Story = {
  render: () => (
    <>
      <Button variant='primary' loading>
        Laster…
      </Button>
      <Button variant='secondary' loading>
        Laster…
      </Button>
      <Button variant='tertiary' loading>
        Laster…
      </Button>
    </>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Button asChild>
      <a target='_blank' rel='noreferrer' href='www.designsystemet.no'>
        Gå til designsystemet.no
      </a>
    </Button>
  ),
}
