import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import {
  Fieldset,
  Radio,
  ValidationMessage,
  useRadioGroup,
  type UseRadioGroupProps,
} from '@statisticsnorway/design-react'

const meta: Meta<UseRadioGroupProps> = {
  title: 'Hooks/useRadioGroup',
  decorators: [
    (Story: React.ComponentType<{ args: UseRadioGroupProps }>, context: { args: UseRadioGroupProps }) => {
      const [, updateArgs] = useArgs()

      return (
        <Story
          args={{
            ...context.args,
            onChange: (nextValue: string) => {
              updateArgs({ value: nextValue })
            },
          }}
        />
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const { getRadioProps, validationMessageProps } = useRadioGroup({
      name: 'my-radio-group',
      value: 'sjokolade',
      error: 'Du må velge et alternativ',
    })

    return (
      <Fieldset>
        <Fieldset.Legend>Hvilken iskremsmak er best?</Fieldset.Legend>
        <Fieldset.Description>Velg din favorittsmak blant alternativene.</Fieldset.Description>
        <Radio label='Vanilje' {...getRadioProps('vanilje')} />
        <Radio label='Jordbær' {...getRadioProps('jordbær')} />
        <Radio label='Sjokolade' {...getRadioProps('sjokolade')} />
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
    )
  },
}
