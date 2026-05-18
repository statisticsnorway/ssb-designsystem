import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Label, EXPERIMENTAL_Suggestion } from '@statisticsnorway/design-react'

const DATA_PLACES = ['Rana', 'Oslo', 'Akershus', 'Karmøy', 'Trondheim', 'Bergen', 'Lillestrøm']

const description = `
⚠️ Suggestion er under utvikling hos Digdir, og kan fortsatt få endringer og forbedringer.

Suggestion er en søkbar select med mulighet for å velge ett eller flere alternativer.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/suggestion/overview
`

const meta: Meta<typeof EXPERIMENTAL_Suggestion> = {
  title: 'Digdir/Suggestion',
  component: EXPERIMENTAL_Suggestion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof EXPERIMENTAL_Suggestion>

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Velg en destinasjon</Label>
      <EXPERIMENTAL_Suggestion>
        <EXPERIMENTAL_Suggestion.Input />
        <EXPERIMENTAL_Suggestion.Clear />
        <EXPERIMENTAL_Suggestion.List>
          <EXPERIMENTAL_Suggestion.Empty>Ingen treff</EXPERIMENTAL_Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <EXPERIMENTAL_Suggestion.Option key={place} label={place} value={place}>
              {place}
              <div>Kommune</div>
            </EXPERIMENTAL_Suggestion.Option>
          ))}
        </EXPERIMENTAL_Suggestion.List>
      </EXPERIMENTAL_Suggestion>
    </Field>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Field>
      <Label>Velg en eller flere destinasjoner</Label>
      <EXPERIMENTAL_Suggestion multiple>
        <EXPERIMENTAL_Suggestion.Input />
        <EXPERIMENTAL_Suggestion.Clear />
        <EXPERIMENTAL_Suggestion.List>
          <EXPERIMENTAL_Suggestion.Empty>Ingen treff</EXPERIMENTAL_Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <EXPERIMENTAL_Suggestion.Option key={place} value={place}>
              {place}
            </EXPERIMENTAL_Suggestion.Option>
          ))}
        </EXPERIMENTAL_Suggestion.List>
      </EXPERIMENTAL_Suggestion>
    </Field>
  ),
}
