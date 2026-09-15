import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Fieldset,
  Checkbox,
  ValidationMessage,
  useCheckboxGroup,
  type UseCheckboxGroupProps,
} from '@statisticsnorway/design-react'

const meta: Meta<UseCheckboxGroupProps> = {
  title: 'Hooks/useCheckboxGroup',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const { getCheckboxProps, validationMessageProps } = useCheckboxGroup({
      name: 'my-checkbox-group',
      value: ['epost'],
    })

    return (
      <Fieldset>
        <Checkbox label='E-post' {...getCheckboxProps('epost')} />
        <Checkbox label='Telefon' {...getCheckboxProps('telefon')} />
        <Checkbox label='SMS' {...getCheckboxProps('sms')} />
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
    )
  },
}
