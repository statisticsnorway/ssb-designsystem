import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { Checkbox, Fieldset, ValidationMessage, useCheckboxGroup } from '@statisticsnorway/design-react'

const meta: Meta<typeof Checkbox> = {
  title: 'Komponenter/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => <Checkbox label='Checkbox label' description='Description' value='value' />,
}

export const Group: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
      <Fieldset.Description>Velg alle alternativene som er relevante for deg.</Fieldset.Description>
      <Checkbox label='E-post' value='epost' checked />
      <Checkbox label='Telefon' value='telefon' />
      <Checkbox label='SMS' value='sms' />
    </Fieldset>
  ),
}

export const WithError: Story = {
  render: () => {
    const WithErrorExample = () => {
      const [error, setError] = useState('')
      const { getCheckboxProps, validationMessageProps, value } = useCheckboxGroup({
        value: ['epost'],
        error,
      })

      useEffect(() => {
        if (value.length < 2) {
          setError('Du må velge minst to alternativ')
        } else {
          setError('')
        }
      }, [value])

      return (
        <Fieldset>
          <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
          <Fieldset.Description>Velg alle alternativene som er relevante for deg.</Fieldset.Description>
          <Checkbox label='E-post' {...getCheckboxProps('epost')} />
          <Checkbox label='Telefon' {...getCheckboxProps('telefon')} />
          <Checkbox label='SMS' {...getCheckboxProps('sms')} />
          <ValidationMessage {...validationMessageProps} />
        </Fieldset>
      )
    }

    return <WithErrorExample />
  },
}

export const Outline: Story = {
  render: () => {
    const Outline = () => {
      const { getCheckboxProps } = useCheckboxGroup({
        value: ['drift'],
        variant: 'outline',
      })

      return (
        <Fieldset>
          <Fieldset.Legend>Hvilke varsler vil du motta?</Fieldset.Legend>
          <Fieldset.Description>Velg hvilke typer varsler som er relevante for deg.</Fieldset.Description>
          <Checkbox
            label='Driftsmeldinger'
            description='Varsler ved planlagt vedlikehold og driftsavvik.'
            {...getCheckboxProps('drift')}
          />
          <Checkbox
            label='Påminnelser'
            description='Varsler om frister og oppgaver som krever handling.'
            {...getCheckboxProps('paminnelse')}
          />
        </Fieldset>
      )
    }

    return <Outline />
  },
}
