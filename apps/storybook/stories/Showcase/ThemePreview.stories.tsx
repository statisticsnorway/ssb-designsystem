import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite'
import { useState } from 'react'
import { ThemePreview } from './ThemePreview'
import { Heading, Fieldset, ToggleGroup, Link, List, Divider, Button } from '@statisticsnorway/design-react'
import { SunIcon, MoonIcon, ChevronUpIcon, ChevronRightIcon } from '@navikt/aksel-icons'
import classes from './ThemePreview.module.css'

const meta = {
  title: 'Showcase/Theme Preview',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const sizes = ['sm', 'md', 'lg']
const colorSchemeModes = ['light', 'dark']
const colorModes = ['accent', 'neutral', 'brand1', 'brand2']

export const Default: StoryFn = () => {
  const [size, setSize] = useState('sm')
  const [colorSchemeMode, setColorSchemeMode] = useState('light')
  const [colorMode, setColorMode] = useState('accent')

  return (
    <div data-color-scheme={colorSchemeMode} className={classes.wrapper} data-size={size} data-color={colorMode}>
      <div className={classes.innerWrapper}>
        <div className={classes.controls} data-size='sm'>
          <Fieldset className={classes.controlFieldset}>
            <Fieldset.Legend>
              Størrelse <code data-size='xs'>(data-size)</code>
            </Fieldset.Legend>
            <ToggleGroup variant='secondary' value={size} onChange={(val) => setSize(val)}>
              {sizes.map((size) => (
                <ToggleGroup.Item key={size} value={size}>
                  {size}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>

          <Fieldset className={classes.controlFieldset}>
            <Fieldset.Legend>
              Fargemodus <code data-size='xs'>(data-color-scheme)</code>
            </Fieldset.Legend>
            <ToggleGroup variant='secondary' value={colorSchemeMode} onChange={setColorSchemeMode}>
              {colorSchemeModes.map((color) => (
                <ToggleGroup.Item key={color} value={color}>
                  {color === 'light' ? <SunIcon aria-hidden /> : <MoonIcon aria-hidden />}
                  {color}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>
          <Fieldset className={classes.controlFieldset}>
            <Fieldset.Legend>
              Fargetema <code data-size='xs'>(data-color)</code>
            </Fieldset.Legend>
            <ToggleGroup value={colorMode} onChange={setColorMode}>
              {colorModes.map((color) => (
                <ToggleGroup.Item key={color} value={color}>
                  {color}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>
        </div>
        <ThemePreview data-size={size} data-color={colorMode} data-color-scheme={colorSchemeMode} />
      </div>
      <div className={classes.footer} data-color-scheme='dark'>
        <div className={classes.footerTop}>
          <Button variant='secondary' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUpIcon aria-hidden />
            Til toppen
          </Button>
        </div>

        <Divider />

        <div className={classes.footerList}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Heading level={3} data-size='sm'>
                Lenkeliste
              </Heading>

              <List.Unordered className={classes.footerLinks}>
                {[1, 2, 3, 4].map((nr) => (
                  <List.Item key={nr}>
                    <Link href=''>
                      <ChevronRightIcon aria-hidden height={'1.5rem'} width={'1.5rem'} />
                      <span>Lenke {nr}</span>
                    </Link>
                  </List.Item>
                ))}
              </List.Unordered>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
