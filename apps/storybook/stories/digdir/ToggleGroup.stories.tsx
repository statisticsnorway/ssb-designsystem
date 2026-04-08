import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Divider, Heading, Paragraph, ToggleGroup, Tooltip } from '@digdir/designsystemet-react'
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '@navikt/aksel-icons'

const description = `
ToggleGroup samler relaterte alternativer. Komponenten består av en gruppe knapper som henger sammen, der bare én knapp kan velges om gangen.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/toggle-group/overview
`

const meta: Meta<typeof ToggleGroup> = {
  title: 'Digdir/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup data-toggle-group='Filter' defaultValue='innboks'>
      <ToggleGroup.Item value='innboks'>Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value='utkast'>Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value='arkiv'>Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value='sendt'>Sendt</ToggleGroup.Item>
    </ToggleGroup>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Kun ikoner
        </Heading>

        <ToggleGroup data-toggle-group='Tekstjustering' defaultValue='option-1'>
          <Tooltip content='Venstrestilt'>
            <ToggleGroup.Item value='option-1'>
              <AlignLeftIcon aria-hidden />
            </ToggleGroup.Item>
          </Tooltip>
          <Tooltip content='Midtstilt'>
            <ToggleGroup.Item value='option-2'>
              <AlignCenterIcon aria-hidden />
            </ToggleGroup.Item>
          </Tooltip>
          <Tooltip content='Høyrestilt'>
            <ToggleGroup.Item value='option-3'>
              <AlignRightIcon aria-hidden />
            </ToggleGroup.Item>
          </Tooltip>
        </ToggleGroup>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Secondary variant
        </Heading>

        <ToggleGroup data-toggle-group='Filter' defaultValue='innboks' variant='secondary'>
          <ToggleGroup.Item value='innboks'>Innboks</ToggleGroup.Item>
          <ToggleGroup.Item value='utkast'>Utkast</ToggleGroup.Item>
          <ToggleGroup.Item value='arkiv'>Arkiv</ToggleGroup.Item>
          <ToggleGroup.Item value='sendt'>Sendt</ToggleGroup.Item>
        </ToggleGroup>
      </div>
    </div>
  ),
}
