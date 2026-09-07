import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs } from '@statisticsnorway/design-react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Komponenter/Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: () => (
    <Breadcrumbs aria-label='Brødsmulesti'>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  ),
}

export const Back: Story = {
  render: () => (
    <Breadcrumbs aria-label='Brødsmulesti'>
      <Breadcrumbs.Link href='#' aria-label='Tilbake til Nivå 3'>
        Nivå 3
      </Breadcrumbs.Link>
    </Breadcrumbs>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Breadcrumbs aria-label='Brødsmulesti'>
      <Breadcrumbs.Link href='#' aria-label='Tilbake til Nivå 3'>
        Nivå 3
      </Breadcrumbs.Link>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  ),
}
