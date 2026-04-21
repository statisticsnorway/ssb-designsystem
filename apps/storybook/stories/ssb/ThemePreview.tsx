import {
  Alert,
  Button,
  Card,
  Checkbox,
  Details,
  Heading,
  ErrorSummary,
  Field,
  Fieldset,
  Label,
  Link,
  List,
  Paragraph,
  Table,
  Avatar,
  Tag,
  Textfield,
  ToggleGroup,
  Tooltip,
  Select,
  Search,
  Pagination,
} from '@statisticsnorway/design-react'
import { type HTMLAttributes, useState } from 'react'
import cl from 'clsx/lite'
import classes from './ThemePreview.module.css'
import { CalculatorIcon, TableIcon, AreaChartIcon } from '@navikt/aksel-icons'

type ThemePreviewProps = HTMLAttributes<HTMLDivElement>

export function ThemePreview({ ...props }: ThemePreviewProps) {
  const [showError, setShowError] = useState(false)
  return (
    <div className={classes.components} {...props}>
      <div className={cl(classes.alert)}>
        <Alert data-color='info'>
          <Heading
            level={2}
            data-size='xs'
            style={{
              marginBottom: '0.5rem',
            }}
          >
            Eksempler på komponenter
          </Heading>
          <Paragraph>
            Denne siden viser eksempler på noen av komponentene i designsystemet, og er ment som en referanse for
            hvordan de ser ut i forskjellige farger og størrelser.
          </Paragraph>
        </Alert>
      </div>
      <div className={cl(classes.card, classes.form)}>
        <Heading data-size='md'>Logg inn</Heading>
        <Textfield label='Navn' id='fornavn' />
        <Textfield type='password' label='Passord' placeholder='********' />
        <Checkbox label='Jeg godtar vilkårene' />
        <Button>Logg inn</Button>

        <Tooltip content='Trykk for å få hjelp'>
          <Link href='#' className={classes.userLink}>
            Glemt passord?
          </Link>
        </Tooltip>
      </div>

      <div className={cl(classes.card, classes.tableContainer)}>
        <Heading className={classes.cardTitle}>Alle brukere</Heading>
        <div className={classes.tableHeader}>
          <div className={classes.tableAction}>
            <ToggleGroup data-toggle-group='display' defaultValue='table'>
              <ToggleGroup.Item value='table'>
                <TableIcon aria-hidden />
                Vis som tabell
              </ToggleGroup.Item>
              <ToggleGroup.Item value='graph'>
                <AreaChartIcon aria-hidden />
                Vis som graf
              </ToggleGroup.Item>
            </ToggleGroup>
          </div>
          <Search className={classes.tableSearch}>
            <Search.Input aria-label='Søk' />
            <Search.Clear />
          </Search>
        </div>
        <Table border className={classes.table}>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell onClick={function Ya() {}} sort='none'>
                Navn
              </Table.HeaderCell>
              <Table.HeaderCell>Epost</Table.HeaderCell>
              <Table.HeaderCell onClick={function Ya() {}} sort='none'>
                Telefon
              </Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className={classes.tableCellAvatar}>
                <Avatar aria-label='dame'>LN</Avatar>
                Lise Nordmann
              </Table.Cell>
              <Table.Cell>lise@nordmann.no</Table.Cell>
              <Table.Cell>22345678</Table.Cell>
              <Table.Cell>
                <Tag>aktiv</Tag>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={classes.tableCellAvatar}>
                <Avatar aria-label='mann'>ON</Avatar>
                Ola Nordmann
              </Table.Cell>
              <Table.Cell>ola@nordmann.no</Table.Cell>
              <Table.Cell>87654321</Table.Cell>
              <Table.Cell>
                <Tag data-color='warning'>inaktiv</Tag>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Pagination className={classes.tablePagination} aria-label='Sidenavigering'>
          <Pagination.List>
            <Pagination.Item>
              <Pagination.Button aria-label='Forrige side' data-variant='tertiary'>
                Forrige
              </Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button aria-label='Side 1' data-variant='tertiary'>
                1
              </Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button aria-label='Side 2' data-variant='primary'>
                2
              </Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button aria-label='Side 3' data-variant='tertiary'>
                3
              </Pagination.Button>
            </Pagination.Item>
            <Pagination.Item>
              <Pagination.Button aria-label='Neste side' data-variant='tertiary'>
                Neste
              </Pagination.Button>
            </Pagination.Item>
          </Pagination.List>
        </Pagination>
      </div>

      <div className={cl(classes.card, classes.typography)}>
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
      </div>

      <div className={cl(classes.card, classes.calculator)}>
        <Heading data-size='md'>Beregn husleie</Heading>
        {showError && (
          <ErrorSummary>
            <ErrorSummary.Heading>For å gå videre må du rette opp følgende feil:</ErrorSummary.Heading>
            <ErrorSummary.List>
              <ErrorSummary.Item>
                <ErrorSummary.Link href='#month'>Må velge måned</ErrorSummary.Link>
              </ErrorSummary.Item>
              <ErrorSummary.Item>
                <ErrorSummary.Link href='#year'>Fra år må være et gyldig år</ErrorSummary.Link>
              </ErrorSummary.Item>
            </ErrorSummary.List>
          </ErrorSummary>
        )}
        <Textfield prefix='NOK' suffix='pr. mnd' label='Hva er husleien idag?' />
        <Fieldset
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gap: '1rem',
          }}
        >
          <Fieldset.Legend>Når justerte du husleien sist?</Fieldset.Legend>
          <Field>
            <Label htmlFor='month'>Velg måned</Label>
            <Select defaultValue='' aria-label='Velg måned'>
              <Select.Option value='' disabled>
                Velg måned …
              </Select.Option>
              <Select.Option value='januar'>Januar</Select.Option>
              <Select.Option value='februar'>Februar</Select.Option>
              <Select.Option value='mars'>Mars</Select.Option>
              <Select.Option value='april'>April</Select.Option>
              <Select.Option value='mai'>Mai</Select.Option>
              <Select.Option value='juni'>Juni</Select.Option>
              <Select.Option value='juli'>Juli</Select.Option>
              <Select.Option value='august'>August</Select.Option>
              <Select.Option value='september'>September</Select.Option>
              <Select.Option value='oktober'>Oktober</Select.Option>
              <Select.Option value='november'>November</Select.Option>
              <Select.Option value='desember'>Desember</Select.Option>
            </Select>
          </Field>
          <Textfield
            label='Fra år'
            placeholder='YYYY'
            inputMode='numeric'
            error={showError ? 'Oppgi et gyldig år' : undefined}
          />
        </Fieldset>
        <Button onClick={() => setShowError(true)}>Se ny husleie</Button>
      </div>
      <div className={cl(classes.cardWithoutBackground, classes.faqSection)}>
        <Heading data-size='md'>Ofte stillte spørsmål</Heading>
        <Card>
          <Details>
            <Details.Summary>Hvordan beregnes ny husleie?</Details.Summary>
            <Details.Content>
              Ny husleie beregnes ut fra endringen i konsumprisindeksen fra tidspunktet du sist justerte husleien.
            </Details.Content>
          </Details>

          <Details>
            <Details.Summary>Hvor ofte kan husleien justeres?</Details.Summary>
            <Details.Content>
              Husleien kan normalt justeres én gang i året, så lenge reglene i husleieloven blir fulgt.
            </Details.Content>
          </Details>

          <Details>
            <Details.Summary>Må leietakeren varsles på forhånd?</Details.Summary>
            <Details.Content>
              Ja, leietakeren skal få skriftlig varsel minst én måned før ny husleie trer i kraft.
            </Details.Content>
          </Details>

          <Details>
            <Details.Summary>Hvor kan jeg lese mer om reglene?</Details.Summary>
            <Details.Content>
              <Paragraph>
                Du kan lese mer hos <Link href='#'>Husleietvistutvalget</Link>.
              </Paragraph>
            </Details.Content>
          </Details>
        </Card>
      </div>
      <div className={cl(classes.cardWithoutBackground, classes.news)}>
        <Heading data-size='md'>Nyheter</Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 700px',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          <Card data-variant='tinted'>
            <Card.Block>
              <img src='/img/animals/roe-deer.jpg' alt='deer' />
            </Card.Block>
            <Card.Block>
              <Heading level={3}>Rådyr olje</Heading>
              <Paragraph>
                Prisene på olje skyter i været og skaper merkbare ringvirkninger for både husholdninger og næringsliv.
              </Paragraph>
            </Card.Block>
          </Card>
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
                Våren er her, og hagen trenger litt stell. Godt å se at jobben allerede er i gang – med to dedikerte
                elger på skift. <br />
                Les mer om dette i denne spennende artikkelen.
              </Paragraph>
            </Card.Block>
          </Card>
        </div>
      </div>
      <div className={cl(classes.cardWithoutBackground, classes.linksList)}>
        <Heading data-size='md'>Lenkeliste</Heading>
        <List.Unordered
          style={{
            listStyle: 'none',
            padding: 0,
          }}
        >
          <List.Item>
            <Link href=''>
              <TableIcon aria-hidden height={'1.5rem'} width={'1.5rem'} />
              <span>Statistikkbanken</span>
            </Link>
          </List.Item>
          <List.Item>
            <Link href=''>
              <CalculatorIcon aria-hidden height={'1.5rem'} width={'1.5rem'} />
              <span>Våre kalkulatorer</span>
            </Link>
          </List.Item>
          <List.Item>
            <Link href=''>Svare på undersøkelse</Link>
          </List.Item>
        </List.Unordered>
      </div>
      <div className={cl(classes.cardWithoutBackground, classes.cardLinks)}>
        <Heading data-size='md'>Lenkekort</Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Card
            variant='tinted'
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
            }}
          >
            <Card.Block
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRight: 'none',
              }}
            >
              <img
                src='/svg/statbank.svg'
                alt=''
                style={{
                  width: '110px',
                  height: '80px',
                }}
              />
            </Card.Block>
            <Card.Block>
              <Heading level={3} data-size='sm'>
                <Link href='#'>Se alle tall fra denne statistikken</Link>
              </Heading>
              <Paragraph>
                Vi har flere tall for denne statistikken i Statistikkbanken. Lag figurer og tabeller med tallene du
                trenger.
              </Paragraph>
            </Card.Block>
          </Card>
        </div>
      </div>
    </div>
  )
}
