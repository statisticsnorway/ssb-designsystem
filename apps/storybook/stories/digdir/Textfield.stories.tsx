import type { Meta, StoryObj } from '@storybook/react'
import { Tag, Textfield } from '@digdir/designsystemet-react'

const description = `
Textfield gir brukere muligheten til å skrive fritekst eller tall.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/textfield/overview
`

const meta: Meta<typeof Textfield> = {
  title: 'Digdir/Textfield',
  component: Textfield,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Textfield>

export const Default: Story = {
  render: () => <Textfield label='Navn' />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '32rem' }}>
      <Textfield label='Standard' description='Skriv inn navnet ditt' />

      <Textfield label='E-post' type='email' description='Vi bruker e-posten til å kontakte deg' />

      <Textfield label='Telefonnummer' type='tel' />

      <Textfield
        label={
          <>
            Hvor bor du?
            <Tag data-color='warning' style={{ marginInlineStart: 'var(--ds-size-2)' }}>
              Må fylles ut
            </Tag>
          </>
        }
        required
      />

      <Textfield label='Multiline' multiline rows={4} />

      <Textfield label='Med prefiks og suffiks' prefix='NOK' suffix='pr. mnd' />

      <Textfield label='Med teller' counter={50} />
    </div>
  ),
}
