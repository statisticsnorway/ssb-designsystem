import type { Meta, StoryObj } from '@storybook/react'
import { Fieldset, Radio, ValidationMessage, Heading } from '@digdir/designsystemet-react'

const description = `
Radio er et alternativ brukeren kan velge. Bruk flere Radio for å vise en liste med alternativer.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/radio/overview
`

const meta: Meta<typeof Radio> = {
  title: 'Digdir/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: () => <Radio label='E-post' value='epost' name='kontakt' />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Gruppert
        </Heading>
        <Fieldset>
          <Fieldset.Legend>Hvordan ønsker du at vi kontakter deg?</Fieldset.Legend>
          <Fieldset.Description>Velg metoden som passer best for deg.</Fieldset.Description>
          <Radio
            label='E-post'
            description='Vi bruker e-postadressen du har oppgitt tidligere.'
            value='epost'
            name='kontaktgruppe'
          />
          <Radio
            label='SMS'
            description='Vi bruker telefonnummeret du har oppgitt tidligere.'
            value='sms'
            name='kontaktgruppe'
          />
          <Radio label='Brev' description='Levering kan ta 3–5 virkedager.' value='brev' name='kontaktgruppe' />
        </Fieldset>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Med feilmelding
        </Heading>
        <Fieldset>
          <Fieldset.Legend>Hvilken bydel bor du i?</Fieldset.Legend>
          <Fieldset.Description>Trondheim er delt inn i fire bydeler.</Fieldset.Description>
          <Radio label='Østbyen' value='ostbyen' name='bydel' aria-invalid='true' />
          <Radio label='Lerkendal' value='lerkendal' name='bydel' aria-invalid='true' />
          <Radio label='Heimdal' value='heimdal' name='bydel' aria-invalid='true' />
          <Radio label='Midtbyen' value='midtbyen' name='bydel' aria-invalid='true' />
          <ValidationMessage data-color='danger'>Du må velge en bydel før du kan fortsette.</ValidationMessage>
        </Fieldset>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Horisontal plassering
        </Heading>
        <Fieldset>
          <Fieldset.Legend>Kontaktes på e-post?</Fieldset.Legend>
          <Fieldset.Description>Bekreft om du ønsker å bli kontaktet per e-post.</Fieldset.Description>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-size-6)',
            }}
          >
            <Radio name='kontakt-epost' label='Ja' value='ja' />
            <Radio name='kontakt-epost' label='Nei' value='nei' />
          </div>
        </Fieldset>
      </div>
    </div>
  ),
}
