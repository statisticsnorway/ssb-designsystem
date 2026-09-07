import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { Fieldset, Radio, useRadioGroup, type UseRadioGroupProps } from '@statisticsnorway/design-react'

const meta: Meta<UseRadioGroupProps> = {
  title: 'Hooks/useRadioGroup',
  argTypes: {
    disabled: {
      description: 'Deaktiverer alle radioknappene i gruppen',
      control: 'boolean',
    },
    error: {
      description: 'Felles feilmelding for alle radioknappene',
      control: false,
    },
    name: {
      description: 'Navn som brukes for alle radioknappene',
      table: {
        defaultValue: { summary: 'Autogenerert navn' },
      },
      control: 'text',
    },
    readOnly: {
      description: 'Setter alle radioknappene i gruppen til skrivebeskyttet',
      control: 'boolean',
    },
    required: {
      description: 'Angir at en verdi må velges',
      control: 'boolean',
    },
    value: {
      description: 'Startverdien for gruppen',
      control: 'text',
    },
    onChange: {
      description: 'Kalles når valgt verdi endres',
      control: false,
    },
    variant: {
      description: 'Variant som brukes på alle radioknappene i gruppen',
      control: 'select',
      options: ['default', 'outline'],
    },
  },
  decorators: [
    (Story, context) => {
      const [, updateArgs] = useArgs()

      return (
        <Story
          args={{
            ...context.args,
            onChange: (nextValue) => {
              updateArgs({ value: nextValue })
            },
          }}
        />
      )
    },
  ],
}

export default meta

type Story = StoryObj<UseRadioGroupProps>

export const Default: Story = {
  args: {
    name: 'my-radio-group',
    value: '',
  },

  render: (args) => {
    const { getRadioProps } = useRadioGroup(args)

    return (
      <Fieldset>
        <Fieldset.Legend>Hvilken iskremsmak er best?</Fieldset.Legend>
        <Fieldset.Description>Velg din favorittsmak blant alternativene.</Fieldset.Description>

        <Radio label='Vanilje' {...getRadioProps('vanilje')} />
        <Radio label='Jordbær' {...getRadioProps('jordbær')} />
        <Radio label='Sjokolade' {...getRadioProps('sjokolade')} />
      </Fieldset>
    )
  },
}
