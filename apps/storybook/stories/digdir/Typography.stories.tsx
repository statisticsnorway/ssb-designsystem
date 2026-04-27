import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Paragraph } from '@statisticsnorway/design-react'

const meta = {
  title: 'SSB/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '2rem',
        maxWidth: '48rem',
      }}
    >
      <section style={{ display: 'grid', gap: '0.75rem' }}>
        <Heading level={1} data-size='xl'>
          Heading level 1
        </Heading>
        <Heading level={2} data-size='lg'>
          Heading level 2
        </Heading>
        <Heading level={3} data-size='md'>
          Heading level 3
        </Heading>
        <Heading level={4} data-size='sm'>
          Heading level 4
        </Heading>
      </section>

      <section style={{ display: 'grid', gap: '1rem' }}>
        <Paragraph>
          Dette er et eksempel på avsnittstekst i designsystemet. Teksten kan brukes for å vurdere lesbarhet, linjehøyde
          og hvordan fonten fungerer i vanlig innhold.
        </Paragraph>
        <Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>
      </section>
    </div>
  ),
}

export const HeadingStory: Story = {
  name: 'Heading',
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <Heading level={1} data-size='xl'>
        Heading level 1
      </Heading>
      <Heading level={2} data-size='lg'>
        Heading level 2
      </Heading>
      <Heading level={3} data-size='md'>
        Heading level 3
      </Heading>
      <Heading level={4} data-size='sm'>
        Heading level 4
      </Heading>
    </div>
  ),
}

export const ParagraphStory: Story = {
  name: 'Paragraph',
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '2rem',
        maxWidth: '48rem',
      }}
    >
      <Paragraph data-size='xl'>This is an xl paragraph</Paragraph>
      <Paragraph data-size='lg'>This is a lg paragraph</Paragraph>
      <Paragraph data-size='md'>This is a md paragraph</Paragraph>
      <Paragraph data-size='sm'>This is a sm paragraph</Paragraph>
      <Paragraph data-size='xs'>This is an xs paragraph</Paragraph>
    </div>
  ),
}
