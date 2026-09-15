import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fieldset, Switch } from '@statisticsnorway/design-react'

const meta: Meta<typeof Switch> = {
  title: 'Komponenter/Switch',
  component: Switch,
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
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => <Switch label='Switch' />,
}

export const Group: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Skru av/på lys</Fieldset.Legend>
      <Switch label='Stue' defaultChecked />
      <Switch label='Kjøkken' />
      <Switch label='Bad' />
      <Switch label='Soverom' description='Får ikke kontakt med lyspærene' readOnly />
    </Fieldset>
  ),
}

export const Outline: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Aktiver varslinger</Fieldset.Legend>
      <Switch variant='outline' label='Driftsmeldinger' defaultChecked />
      <Switch variant='outline' label='Påminnelser' />
      <Switch variant='outline' label='Nyhetsoppdateringer' />
      <Switch label='SMS-varsler' description='Mangler gyldig telefonnummer i profilen' variant='outline' readOnly />
    </Fieldset>
  ),
}

export const RightAligned: Story = {
  render: () => <Switch label='Lydløs' position='end' />,
}

export const WithDescription: Story = {
  render: () => <Switch label='E-postvarsler' description='Du mottar varsler når nye rapporter publiseres' />,
}
