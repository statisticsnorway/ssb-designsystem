import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fieldset, Radio, ValidationMessage, Heading, useRadioGroup } from '@statisticsnorway/design-react'

const meta: Meta<typeof Radio> = {
  title: 'Komponenter/Radio',
  component: Radio,
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: () => <Radio label='E-post' value='epost' name='kontakt' />,
}

export const Group: Story = {
  render: () => {
    const { getRadioProps } = useRadioGroup({
      name: 'kontakt',
      value: 'epost',
    })

    return (
      <Fieldset>
        <Fieldset.Legend>Hvordan ønsker du at vi kontakter deg?</Fieldset.Legend>
        <Fieldset.Description>
          Velg metoden som passer best for deg. Vi bruker dette kun til å sende viktig informasjon om saken din.
        </Fieldset.Description>
        <Radio
          label='E-post'
          description='Vi bruker e-postadressen du har oppgitt tidligere (navn@epost.no)'
          {...getRadioProps('epost')}
        />
        <Radio
          label='SMS'
          description='Vi bruker telefonnummeret du har oppgitt tidligere (99 99 99 99)'
          {...getRadioProps('sms')}
        />
        <Radio
          label='Brev'
          description='Levering kan ta 3-5 virkedager, avhengig av posttjenesten.'
          {...getRadioProps('brev')}
        />
      </Fieldset>
    )
  },
}

export const Outline: Story = {
  render: () => {
    const { getRadioProps } = useRadioGroup({
      name: 'course-level',
      variant: 'outline',
    })

    return (
      <Fieldset>
        <Fieldset.Legend>Hvilket kursnivå passer deg best?</Fieldset.Legend>
        <Fieldset.Description>Velg nivået som beskriver din erfaring med temaet.</Fieldset.Description>
        <Radio
          label='Nybegynner'
          description='Passer for deg som er helt ny og ønsker en rolig introduksjon.'
          {...getRadioProps('beginner')}
        />
        <Radio
          label='Viderekommen'
          description='Passer for deg som kjenner grunnleggende begreper og vil gå dypere.'
          {...getRadioProps('intermediate')}
        />
        <Radio
          label='Ekspert'
          description='Passer for deg som ønsker avanserte temaer og praktiske case.'
          {...getRadioProps('expert')}
        />
      </Fieldset>
    )
  },
}

export const WithError: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Hvilken bydel bor du i?</Fieldset.Legend>
      <Fieldset.Description>Trondheim er delt inn i fire bydeler</Fieldset.Description>
      <Radio label='Østbyen' value='ostbyen' name='city' />
      <Radio label='Lerkendal' value='lerkendal' name='city' />
      <Radio label='Heimdal' value='heimdal' name='city' />
      <Radio label='Midtbyen' value='midtbyen' name='city' />
      <ValidationMessage data-color='danger'>Du må velge en bydel før du kan fortsette.</ValidationMessage>
    </Fieldset>
  ),
}

export const Placement: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Kontaktes på e-post?</Fieldset.Legend>
      <Fieldset.Description>Bekreft om du ønsker å bli kontaktet per e-post.</Fieldset.Description>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-size-6)' }}>
        <Radio name='my-inline' label='Ja' value='ja' />
        <Radio name='my-inline' label='Nei' value='nei' />
      </div>
    </Fieldset>
  ),
}
