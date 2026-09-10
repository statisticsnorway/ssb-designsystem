import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, Label, EXPERIMENTAL_Suggestion } from '@statisticsnorway/design-react'

const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm']

const meta: Meta<typeof EXPERIMENTAL_Suggestion> = {
  title: 'Komponenter/Suggestion',
  component: EXPERIMENTAL_Suggestion,
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
      <Label>Velg en destinasjon</Label>
      <EXPERIMENTAL_Suggestion multiple>
        <EXPERIMENTAL_Suggestion.Input />
        <EXPERIMENTAL_Suggestion.Toggle />
        <EXPERIMENTAL_Suggestion.Clear />
        <EXPERIMENTAL_Suggestion.List>
          <EXPERIMENTAL_Suggestion.Empty>Ingen treff</EXPERIMENTAL_Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <EXPERIMENTAL_Suggestion.Option key={place}>{place}</EXPERIMENTAL_Suggestion.Option>
          ))}
        </EXPERIMENTAL_Suggestion.List>
      </EXPERIMENTAL_Suggestion>
    </Field>
  ),
}

export const Clear: Story = {
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

export const ToggleList: Story = {
  render: () => (
    <Field>
      <Label>Velg en destinasjon</Label>
      <EXPERIMENTAL_Suggestion>
        <EXPERIMENTAL_Suggestion.Input />
        <EXPERIMENTAL_Suggestion.Toggle />
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

export const Filter: Story = {
  render: () => (
    <Field>
      <Label>Skriv inn et tall mellom 1–6</Label>
      <EXPERIMENTAL_Suggestion
        multiple
        filter={({ index, input }) => !input.value || index === Number(input.value) - 1}
      >
        <EXPERIMENTAL_Suggestion.Input />
        <EXPERIMENTAL_Suggestion.Clear />
        <EXPERIMENTAL_Suggestion.List>
          <EXPERIMENTAL_Suggestion.Empty>Ingen treff</EXPERIMENTAL_Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <EXPERIMENTAL_Suggestion.Option key={place}>{place}</EXPERIMENTAL_Suggestion.Option>
          ))}
        </EXPERIMENTAL_Suggestion.List>
      </EXPERIMENTAL_Suggestion>
    </Field>
  ),
}

export const Creatable: Story = {
  render: () => (
    <Field>
      <Label>Velg destinasjon</Label>
      <EXPERIMENTAL_Suggestion creatable multiple>
        <EXPERIMENTAL_Suggestion.Input />
        <EXPERIMENTAL_Suggestion.Toggle />
        <EXPERIMENTAL_Suggestion.Clear />
        <EXPERIMENTAL_Suggestion.List>
          <EXPERIMENTAL_Suggestion.Empty data-empty='Legg til "{value}"' />
          {DATA_PLACES.map((place) => (
            <EXPERIMENTAL_Suggestion.Option key={place}>{place}</EXPERIMENTAL_Suggestion.Option>
          ))}
        </EXPERIMENTAL_Suggestion.List>
      </EXPERIMENTAL_Suggestion>
    </Field>
  ),
}
