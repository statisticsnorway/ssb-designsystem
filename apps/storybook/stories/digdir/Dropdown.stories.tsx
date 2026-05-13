import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from '@statisticsnorway/design-react'

const description = `
Dropdown er en generisk nedtrekksliste.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/dropdown/overview
`

const meta: Meta<typeof Dropdown> = {
  title: 'Digdir/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: () => (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>Åpne meny</Dropdown.Trigger>
      <Dropdown placement='bottom-end'>
        <Dropdown.Heading>Valg</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Rediger</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Del</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Slett</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'start' }}>
      <Dropdown.TriggerContext>
        <Dropdown.Trigger>Enkel meny</Dropdown.Trigger>
        <Dropdown placement='bottom-end'>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button>Last ned</Dropdown.Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown.Button>Del</Dropdown.Button>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>

      <Dropdown.TriggerContext>
        <Dropdown.Trigger>Med grupper</Dropdown.Trigger>
        <Dropdown placement='bottom-end'>
          <Dropdown.Heading>Handlinger</Dropdown.Heading>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button>Rediger</Dropdown.Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown.Button>Dupliser</Dropdown.Button>
            </Dropdown.Item>
          </Dropdown.List>
          <Dropdown.Heading>Farlige valg</Dropdown.Heading>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button>Slett</Dropdown.Button>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
    </div>
  ),
}
