import {
  Alert,
  Button,
  Card,
  Checkbox,
  Chip,
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
  Tabs,
  Avatar,
  Tag,
  Textfield,
  Select,
  Skeleton,
  Pagination,
} from '@statisticsnorway/design-react'
import { type HTMLAttributes, useState } from 'react'
import cl from 'clsx/lite'
import classes from './ThemePreview.module.css'
import { CalculatorIcon, TableIcon } from '@navikt/aksel-icons'

type ThemePreviewProps = HTMLAttributes<HTMLDivElement>

export function ThemePreview({ ...props }: ThemePreviewProps) {
  const [showError, setShowError] = useState(false)
  const [tableZebra, setTableZebra] = useState(false)
  const [tableBorder, setTableBorder] = useState(false)
  const [tableHover, setTableHover] = useState(false)
  return (
    <div className={classes.components} {...props}>
      <div className={cl(classes.alert)}>
        <Alert data-color='info'>Eksempler på komponenter</Alert>
      </div>

      <div className={cl(classes.card, classes.tableContainer)}>
        <div className={classes.tableHeader}>
          <Heading className={classes.cardTitle}>Tabell</Heading>

          <div className={classes.tableOptions}>
            <Label>Tilpass tabellvisning:</Label>
            <Checkbox label='Zebra' checked={tableZebra} onChange={() => setTableZebra((prev) => !prev)} />
            <Checkbox label='Border' checked={tableBorder} onChange={() => setTableBorder((prev) => !prev)} />
            <Checkbox label='Hover' checked={tableHover} onChange={() => setTableHover((prev) => !prev)} />
          </div>
        </div>

        <Tabs defaultValue='table'>
          <Tabs.List>
            <Tabs.Tab value='table'>Vis som tabell</Tabs.Tab>
            <Tabs.Tab value='figure'>Vis som figur</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value='table'>
            <Table border={tableBorder} zebra={tableZebra} hover={tableHover} className={classes.table}>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell onClick={function Ya() {}} sort='none'>
                    Navn
                  </Table.HeaderCell>
                  <Table.HeaderCell>Epost</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell className={classes.tableCellAvatar}>
                    <Avatar aria-label='Lise'>LN</Avatar>
                    Lise Nordmann
                  </Table.Cell>
                  <Table.Cell>lise@nordmann.no</Table.Cell>
                  <Table.Cell>
                    <Tag>aktiv</Tag>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className={classes.tableCellAvatar}>
                    <Avatar aria-label='Ola'>ON</Avatar>
                    Ola Nordmann
                  </Table.Cell>
                  <Table.Cell>ola@nordmann.no</Table.Cell>
                  <Table.Cell>
                    <Tag data-color='warning'>inaktiv</Tag>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className={classes.tableCellAvatar}>
                    <Avatar aria-label='Maren'>MK</Avatar>
                    Maren Knutsen
                  </Table.Cell>
                  <Table.Cell>maren.knutsen@ssb.no</Table.Cell>
                  <Table.Cell>
                    <Tag data-color='warning'>Designer</Tag>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className={classes.tableCellAvatar}>
                    <Avatar aria-label='mann'>IK</Avatar>
                    Ina Kristiansen
                  </Table.Cell>
                  <Table.Cell>Ina.Viktoria.Kristiansen@ssb.no</Table.Cell>
                  <Table.Cell>
                    <Tag data-color='warning'>Designer</Tag>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell className={classes.tableCellAvatar}>
                    <Avatar aria-label='carina'>CG</Avatar>
                    Carina Nordseth
                  </Table.Cell>
                  <Table.Cell>cgn@ssb.no</Table.Cell>
                  <Table.Cell>
                    <Tag data-color='warning'>Utvikler</Tag>
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
          </Tabs.Panel>
          <Tabs.Panel value='figure'>
            <div className={classes.figureBars} aria-label='Figur laster'>
              <Skeleton variant='rectangle' className={classes.bar} style={{ height: '120px' }} />
              <Skeleton variant='rectangle' className={classes.bar} style={{ height: '200px' }} />
              <Skeleton variant='rectangle' className={classes.bar} style={{ height: '160px' }} />
              <Skeleton variant='rectangle' className={classes.bar} style={{ height: '240px' }} />
              <Skeleton variant='rectangle' className={classes.bar} style={{ height: '180px' }} />
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div className={cl(classes.card, classes.chips)}>
        <Heading className={classes.cardTitle}>Chips</Heading>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <Chip.Radio name='my-radio' value='av'>
            Av
          </Chip.Radio>
          <Chip.Radio name='my-radio' value='paa' defaultChecked>
            På
          </Chip.Radio>

          <Chip.Checkbox>Checkbox</Chip.Checkbox>
          <Chip.Removable>Removable</Chip.Removable>
          <Chip.Button>Button</Chip.Button>
        </div>

        <Heading level={2}>Buttons</Heading>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='tertiary'>Tertiary</Button>
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
      <div className={cl(classes.cardWithMainBackground, classes.news)}>
        <Heading data-size='md'>Card</Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 320px 320px',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          <Card data-variant='tinted'>
            <Card.Block>
              <img src='/img/animals/roe-deer.jpg' alt='deer' />
            </Card.Block>
            <Card.Block>
              <Heading level={3}>
                <Link href='#'>Rådyr olje (Tinted)</Link>
              </Heading>
              <Paragraph>
                Prisene på olje skyter i været og skaper merkbare ringvirkninger for både husholdninger og næringsliv.
              </Paragraph>
            </Card.Block>
          </Card>

          <Card>
            <Card.Block>
              <img src='/img/animals/moose.jpg' alt='Elg som spiser lunsj' />
            </Card.Block>
            <Card.Block>
              <Heading level={3}>
                <Link href='#'>Hagearbeid</Link>
              </Heading>

              <Paragraph>Våren er her, og hagen trenger litt stell. Godt å se at jobben allerede er i gang.</Paragraph>
            </Card.Block>
          </Card>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Card>
              <Card.Block>
                <Heading>
                  <Link href='#'>Lenkekort</Link>
                </Heading>
                <Paragraph>
                  Her finner du en kort oppsummering av innholdet. Tittelen fungerer som lenke til mer informasjon.
                </Paragraph>
              </Card.Block>
            </Card>
            <Card variant='tinted'>
              <Card.Block>
                <Heading>
                  <Link href='#'>Lenkekort Tinted</Link>
                </Heading>
                <Paragraph>
                  Her finner du en kort oppsummering av innholdet. Tittelen fungerer som lenke til mer informasjon.
                </Paragraph>
              </Card.Block>
            </Card>
          </div>
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
