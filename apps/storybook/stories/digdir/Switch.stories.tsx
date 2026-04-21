import type { Meta, StoryObj } from '@storybook/react'
import { Divider, Field, Fieldset, Input, Label, Switch } from '@statisticsnorway/design-react'

const description = `
Switch gir brukerne et valg mellom to alternativer.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/switch/overview
`

const meta: Meta<typeof Switch> = {
  title: 'Digdir/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => <Switch label='Switch' />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', maxWidth: '24rem' }}>
      <div>
        <Fieldset>
          <Fieldset.Legend>Skru av/på lys</Fieldset.Legend>
          <Switch label='Stue' checked />
          <Switch label='Kjøkken' />
          <Switch label='Bad' />
          <Switch label='Soverom' description='Får ikke kontakt med lyspærene' readOnly />
        </Fieldset>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '380px',
          }}
        >
          <Divider />
          <Field
            position='end'
            style={{
              alignItems: 'center',
              padding: 'var(--ds-size-2) 0',
            }}
          >
            <Label>Flymodus</Label>
            <Input type='checkbox' role='switch' />
          </Field>

          <Divider />
          <Field
            position='end'
            style={{
              alignItems: 'center',
              padding: 'var(--ds-size-2) 0',
            }}
          >
            <Label>Lydløs</Label>
            <Input type='checkbox' role='switch' />
          </Field>
          <Divider />
        </div>
      </div>
    </div>
  ),
}
