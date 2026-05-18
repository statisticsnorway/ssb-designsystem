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
  Switch,
  Pagination,
} from '@statisticsnorway/design-react'
import { type HTMLAttributes, useState } from 'react'
import cl from 'clsx/lite'
import classes from './ThemePreview.module.css'
import { CalculatorIcon, TableIcon } from '@navikt/aksel-icons'

type ThemePreviewProps = HTMLAttributes<HTMLDivElement>

export function ThemePreview({ ...props }: ThemePreviewProps) {
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
          <Heading className={classes.cardTitle}>Topp 10 navn</Heading>

          <div className={classes.tableOptions}>
            <Label>Tilpass tabellvisning:</Label>
            <Chip.Checkbox checked={tableZebra} onChange={() => setTableZebra((prev) => !prev)}>
              Zebra
            </Chip.Checkbox>
            <Chip.Checkbox checked={tableBorder} onChange={() => setTableBorder((prev) => !prev)}>
              Border
            </Chip.Checkbox>
            <Switch label='Hover' checked={tableHover} onChange={() => setTableHover((prev) => !prev)} />
          </div>
        </div>

        <Tabs defaultValue='table'>
          <Tabs.List>
            <Tabs.Tab value='table'>Vis som tabell</Tabs.Tab>
            <Tabs.Tab value='figure'>Vis som figur</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value='table'>
            <div className={classes.chipGroup} style={{ justifyContent: 'flex-end' }}>
              <Chip.Removable>Jentenavn</Chip.Removable>
              <Chip.Removable>2025</Chip.Removable>
            </div>
            <div className={classes.tableScroll}>
              <Table border={tableBorder} zebra={tableZebra} hover={tableHover} className={classes.table}>
                <Table.Head>
                  <Table.Row>
                    <Table.HeaderCell>Navn</Table.HeaderCell>
                    <Table.HeaderCell onClick={function Ya() {}} sort='none'>
                      Antall
                    </Table.HeaderCell>
                    <Table.HeaderCell>Per 1 000</Table.HeaderCell>
                  </Table.Row>
                </Table.Head>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell className={classes.tableCellAvatar}>
                      <Avatar aria-label='Emma'>E</Avatar>
                      Emma
                    </Table.Cell>
                    <Table.Cell>386</Table.Cell>
                    <Table.Cell>14</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell className={classes.tableCellAvatar}>
                      <Avatar aria-label='Olivia'>O</Avatar>
                      Olivia
                    </Table.Cell>
                    <Table.Cell>376</Table.Cell>
                    <Table.Cell>14</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell className={classes.tableCellAvatar}>
                      <Avatar aria-label='Nora'>N</Avatar>
                      Nora
                    </Table.Cell>
                    <Table.Cell>366</Table.Cell>
                    <Table.Cell>14</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell className={classes.tableCellAvatar}>
                      <Avatar aria-label='Sofie'>S</Avatar>
                      Sofie
                    </Table.Cell>
                    <Table.Cell>364</Table.Cell>
                    <Table.Cell>14</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell className={classes.tableCellAvatar}>
                      <Avatar aria-label='Leah'>L</Avatar>
                      Leah
                    </Table.Cell>
                    <Table.Cell>355</Table.Cell>
                    <Table.Cell>13</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
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

      <div className={cl(classes.card, classes.calculator)}>
        <Heading data-size='md'>Beregn husleie</Heading>

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
          <Textfield label='Fra år' placeholder='YYYY' inputMode='numeric' />
        </Fieldset>
        <div className={classes.buttonGroup}>
          <Button variant='tertiary'>Hjelp</Button>
          <Button variant='secondary'>Nullstill</Button>
          <Button>Se ny husleie</Button>
        </div>

        <Alert data-color='warning'>Beregningen bruker sist tilgjengelige KPI-tall.</Alert>
      </div>

      <div className={cl(classes.cardWithoutBackground, classes.details)}>
        <Heading data-size='md'>Ofte stilte spørsmål</Heading>

        <Heading data-size='xs'>Filtrer spørsmål</Heading>

        <div className={classes.chipGroup}>
          <Chip.Radio name='faq-filter' value='alle' defaultChecked>
            Alle
          </Chip.Radio>
          <Chip.Radio name='faq-filter' value='beregning'>
            Beregning
          </Chip.Radio>
          <Chip.Radio name='faq-filter' value='regler'>
            Regler
          </Chip.Radio>
          <Chip.Radio name='faq-filter' value='varsling'>
            Varsling
          </Chip.Radio>
        </div>
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

          <Details data-variant='tinted'>
            <Details.Summary>Vedlegg (Tinted)</Details.Summary>
            <Details.Content>Vedlegg 1, vedlegg 2, vedlegg 3</Details.Content>
          </Details>
        </Card>

        <Alert data-color='success'>Så bra du fant svarene du lette etter!</Alert>
      </div>

      <div className={cl(classes.cardWithMainBackground, classes.cards)}>
        <Heading data-size='md'>Aktuelt</Heading>
        <div className={classes.chipGroup}>
          <Chip.Button>Rådyr</Chip.Button>
          <Chip.Button>Husleie</Chip.Button>
          <Chip.Button>Navnestatistikk</Chip.Button>
        </div>
        <div className={classes.cardsGrid}>
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
            <img src='/svg/illustrasjon-rekkehus.svg' alt='Rekkehus' />
            <Heading level={3}>
              <Link href='#'>Husleiekalkulator</Link>
            </Heading>
            <Tag data-color='accent'>Kalkulator</Tag>
            <Paragraph>Med SSBs husleiekalkulator kan du regne ut ny husleie.</Paragraph>
          </Card>

          <div className={cl(classes.cardWithoutBackground, classes.linksList)}>
            <Card variant='tinted'>
              <Heading level={3}>
                <Link href='#'>Navnestatistikken</Link>
              </Heading>
              <Paragraph>Med SSBs husleiekalkulator kan du regne ut ny husleie.</Paragraph>
            </Card>
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
        </div>
      </div>
    </div>
  )
}
