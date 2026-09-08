import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Dropdown } from '@statisticsnorway/design-react'
import { ArrowForwardIcon, DownloadIcon } from '@navikt/aksel-icons'

const meta: Meta<typeof Dropdown> = {
  title: 'Komponenter/Dropdown',
  component: Dropdown,
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

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: () => (
    <>
      <Button popovertarget='dropdown'>Dropdown</Button>
      <Dropdown id='dropdown'>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item 1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Item 2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <>
      <Button popovertarget='dropdown-icons'>Dropdown</Button>
      <Dropdown id='dropdown-icons'>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>
              <ArrowForwardIcon aria-hidden />
              Del
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>
              <DownloadIcon aria-hidden />
              Last ned
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <>
      <Button popovertarget='dropdown-headings'>Dropdown</Button>
      <Dropdown id='dropdown-headings'>
        <Dropdown.Heading>First heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Heading>Second heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  ),
}
