import type { Meta, StoryObj } from '@storybook/react'
import { Card, Divider, Heading, Paragraph, Link } from '@digdir/designsystemet-react'

const description = `
Card fremhever informasjon eller oppgaver som hører sammen.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/card/overview
`

const meta: Meta<typeof Card> = {
  title: 'Digdir/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: '300px' }}>
      <Heading level={3} data-size='sm'>
        Tittel
      </Heading>
      <Paragraph data-size='sm'>Dette er et eksempel på innhold i et kort.</Paragraph>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Card>
          <Heading level={3} data-size='sm'>
            Standard
          </Heading>
          <Paragraph data-size='sm'>Et enkelt kort med standard stil.</Paragraph>
        </Card>

        <Card data-variant='tinted'>
          <Heading level={3} data-size='sm'>
            Tinted
          </Heading>
          <Paragraph data-size='sm'>Kort med bakgrunnsfarge.</Paragraph>
        </Card>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Farger
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card>
            <Card.Block>
              <Paragraph>Standard</Paragraph>
            </Card.Block>
          </Card>
          <Card data-variant='tinted'>
            <Card.Block>
              <Paragraph>Standard:Tinted</Paragraph>
            </Card.Block>
          </Card>
          <Card data-color='neutral'>
            <Card.Block>
              <Paragraph>Neutral</Paragraph>
            </Card.Block>
          </Card>
          <Card data-variant='tinted' data-color='neutral'>
            <Card.Block>
              <Paragraph>Neutral:Tinted</Paragraph>
            </Card.Block>
          </Card>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Lenkekort
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card style={{ maxWidth: '300px' }}>
            <Card.Block>
              <Heading level={3} data-size='sm'>
                <Link href='#'>Klikkbart kort</Link>
              </Heading>
              <Paragraph data-size='sm'>Dette kortet fungerer som en lenke via overskriften.</Paragraph>
            </Card.Block>
          </Card>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Lenkekort med bilde
        </Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, 320px)',
            gap: '1rem',
            justifyContent: 'start',
          }}
        >
          <Card>
            <Card.Block>
              <Heading level={3}>
                <Link href='#'>Default</Link>
              </Heading>
              <Paragraph>Most provide as with carried business are much better more the perfected designer.</Paragraph>
            </Card.Block>
            <Card.Block>
              <img src='/img/animals/cat-landscape.jpg' alt='Cat landscape' />
            </Card.Block>
          </Card>

          <Card data-variant='tinted'>
            <Card.Block>
              <img src='/img/animals/cat-landscape.jpg' alt='Cat landscape' />
            </Card.Block>
            <Card.Block style={{ flex: 1 }}>
              <Heading level={3}>
                <Link href='#'>Tinted</Link>
              </Heading>
              <Paragraph>Most provide as with carried business are much better more the perfected designer.</Paragraph>
            </Card.Block>
          </Card>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Lenkekort med bilde horisontalt
        </Heading>
        <Card
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            width: '700px',
          }}
        >
          <Card.Block>
            <img
              src='/img/animals/moose.jpg'
              alt='Elg som spiser lunsj'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Card.Block>
          <Card.Block>
            <Heading>
              <Link href='#'>Hagearbeid</Link>
            </Heading>
            <Paragraph>
              Våren er her, og hagen trenger litt stell. Godt å se at jobben allerede er i gang – med to dedikerte elger
              på skift. <br />
              Les mer om dette i denne spennende artikkelen.
            </Paragraph>
          </Card.Block>
        </Card>
      </div>
    </div>
  ),
}
