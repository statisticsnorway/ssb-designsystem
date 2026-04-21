import type { Meta, StoryObj } from '@storybook/react'
import { ErrorSummary, Textfield } from '@statisticsnorway/design-react'

const description = `
ErrorSummary er en oppsummering av feil.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/error-summary/overview
`

const meta: Meta<typeof ErrorSummary> = {
  title: 'Digdir/ErrorSummary',
  component: ErrorSummary,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ErrorSummary>
      <ErrorSummary.Heading>For å gå videre må du rette opp følgende feil:</ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href='#'>Fødselsdato kan ikke være etter år 2005</ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href='#'>Telefonnummer kan kun inneholde siffer</ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href='#'>E-post må være gyldig</ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
}

export const WithFormLinks: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '32rem' }}>
      <Textfield label='Fornavn' id='fornavn' error='Fornavn må være minst 2 tegn' />
      <Textfield label='Telefon' id='telefon' type='tel' error='Telefonnummer kan kun inneholde siffer' />

      <ErrorSummary>
        <ErrorSummary.Heading>For å gå videre må du rette opp følgende feil:</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href='#fornavn'>Fornavn må være minst 2 tegn</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href='#telefon'>Telefonnummer kan kun inneholde siffer</ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary>
    </div>
  ),
}
