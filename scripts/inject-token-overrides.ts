import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const PRIMARY_FILE = resolve(__dirname, '../design-tokens/primitives/modes/typography/primary/ssb.json')

const SECONDARY_FILE = resolve(__dirname, '../design-tokens/primitives/modes/typography/secondary/ssb.json')

const SEMANTIC_FILE = resolve(__dirname, '../design-tokens/semantic/style.json')

const THEME_FILE = resolve(__dirname, '../design-tokens/themes/ssb.json')

type TypographyToken = {
  $value?: {
    fontWeight?: string
  }
}

/**
 * Make sure to run this script after `designsystemet tokens create`,
 * but before `designsystemet tokens build`.
 *
 * Injects typography overrides:
 * - Adds a bold font-weight token in primary and secondary
 * - Sets secondary font-family to Open Sans
 * - Updates heading typography to use bold
 */
function injectTypography(): void {
  for (const file of [PRIMARY_FILE, SECONDARY_FILE]) {
    const raw = readFileSync(file, 'utf8')
    const tokens = JSON.parse(raw)

    const ssbTokens: Record<string, unknown> = {
      ...tokens.ssb,
      'font-weight': {
        ...tokens.ssb['font-weight'],
        bold: {
          $type: 'fontWeights',
          $value: 'Bold',
        },
      },
    }

    if (file === SECONDARY_FILE) {
      ssbTokens['font-family'] = {
        $type: 'fontFamilies',
        $value: 'Open Sans, sans-serif',
      }
    }

    const updatedTokens = {
      ...tokens,
      ssb: ssbTokens,
    }

    writeFileSync(file, JSON.stringify(updatedTokens, null, 2) + '\n', 'utf8')
  }

  const semanticRaw = readFileSync(SEMANTIC_FILE, 'utf8')
  const semanticTokens = JSON.parse(semanticRaw)

  const headings = Object.values(semanticTokens.typography.heading) as TypographyToken[]

  for (const heading of headings) {
    if (heading.$value?.fontWeight) {
      heading.$value.fontWeight = '{font-weight.bold}'
    }
  }

  writeFileSync(SEMANTIC_FILE, JSON.stringify(semanticTokens, null, 2) + '\n', 'utf8')

  const themeRaw = readFileSync(THEME_FILE, 'utf8')
  const themeTokens = JSON.parse(themeRaw)

  themeTokens['font-weight'] = {
    ...themeTokens['font-weight'],
    bold: {
      $type: 'fontWeights',
      $value: '{ssb.font-weight.bold}',
    },
  }

  writeFileSync(THEME_FILE, JSON.stringify(themeTokens, null, 2) + '\n', 'utf8')

  console.log('Injected typography token overrides')
}

injectTypography()
