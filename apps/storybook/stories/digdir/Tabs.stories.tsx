import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Paragraph, Tabs, Tooltip } from '@statisticsnorway/design-react'
import { CarIcon, BicycleIcon, MotorcycleIcon } from '@navikt/aksel-icons'

const description = `
Tabs lar brukerne navigere mellom relaterte deler av innholdet, der én del vises om gangen.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/tabs/overview
`

const meta: Meta<typeof Tabs> = {
  title: 'Digdir/Tabs',
  component: Tabs,
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
    <Tabs defaultValue='oversikt'>
      <Tabs.List>
        <Tabs.Tab value='oversikt'>Oversikt</Tabs.Tab>
        <Tabs.Tab value='detaljer'>Detaljer</Tabs.Tab>
        <Tabs.Tab value='kontakt'>Kontakt</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='oversikt'>
        <Paragraph>Dette er en enkel oversikt.</Paragraph>
      </Tabs.Panel>

      <Tabs.Panel value='detaljer'>
        <Paragraph>Her vises flere detaljer.</Paragraph>
      </Tabs.Panel>

      <Tabs.Panel value='kontakt'>
        <Paragraph>Her finner du kontaktinformasjon.</Paragraph>
      </Tabs.Panel>
    </Tabs>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Kun ikoner
        </Heading>

        <Tabs defaultValue='car'>
          <Tabs.List>
            <Tooltip content='Dine biler'>
              <Tabs.Tab value='car'>
                <CarIcon title='Bil' />
              </Tabs.Tab>
            </Tooltip>

            <Tooltip content='Dine sykler'>
              <Tabs.Tab value='bicycle'>
                <BicycleIcon title='Sykkel' />
              </Tabs.Tab>
            </Tooltip>

            <Tooltip content='Dine motorsykler'>
              <Tabs.Tab value='motorcycle'>
                <MotorcycleIcon title='Motorsykkel' />
              </Tabs.Tab>
            </Tooltip>
          </Tabs.List>

          <Tabs.Panel value='car'>Du har ingen biler registrert.</Tabs.Panel>
          <Tabs.Panel value='bicycle'>Du har ingen sykler registrert.</Tabs.Panel>
          <Tabs.Panel value='motorcycle'>Du har ingen motorsykler registrert.</Tabs.Panel>
        </Tabs>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Ikon og tekst
        </Heading>

        <Tabs defaultValue='car'>
          <Tabs.List>
            <Tabs.Tab value='car'>
              <CarIcon aria-hidden='true' />
              Biler
            </Tabs.Tab>

            <Tabs.Tab value='bicycle'>
              <BicycleIcon aria-hidden='true' />
              Sykler
            </Tabs.Tab>

            <Tabs.Tab value='motorcycle'>
              <MotorcycleIcon aria-hidden='true' />
              Motorsykler
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='car'>Du har ingen biler registrert.</Tabs.Panel>
          <Tabs.Panel value='bicycle'>Du har ingen sykler registrert.</Tabs.Panel>
          <Tabs.Panel value='motorcycle'>Du har ingen motorsykler registrert.</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  ),
}
