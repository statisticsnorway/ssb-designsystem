import { useState } from 'react'
import css from '../../../../../packages/css/theme/ssb.css?raw'
import styles from './ColorTokenTable.module.css'
import { Card, Table } from '@statisticsnorway/design-react'

const toUpper = (str: string) => str.replace(/\b./g, (m) => m.toUpperCase())
const toUnique = <T,>(arr: T[]): T[] => [...new Set(arr)]

const COLORS = toUnique(
  Array.from(
    css.matchAll(/--ds-color-([^-]+)(-[^-:)]+){3}/g), // Match minium 3 variants to avoid dynamic tokens without color name
    ([, name]) => name
  )
)

const GROUPS = [
  ['background', [['default'], ['tinted', 'Grupper']]],
  ['surface', [['default', 'Flater'], ['tinted'], ['hover'], ['active']]],
  [
    'border',
    [
      ['subtle', 'Flater og skillelinjer'],
      ['default', 'F.eks. knapper'],
      ['strong', 'F.eks. i skjema'],
    ],
  ],
  [
    'text',
    [
      ['subtle', 'F.eks store ikon'],
      ['default', 'Tekst og ikoner'],
    ],
  ],
  [
    'base',
    [
      ['default', 'Til f.eks. knapper'],
      ['hover'],
      ['active'],
      ['contrast-subtle', 'På base'],
      ['contrast-default', 'På base'],
    ],
  ],
] as const

const COPIED_LABEL = 'Kopiert!'

export const ColorTokenTable = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const handleCopy = async (token: string) => {
    await navigator.clipboard.writeText(token)
    setCopiedToken(token)
    setTimeout(() => {
      setCopiedToken((current) => (current === token ? null : current))
    }, 1500)
  }

  return (
    <figure className={styles.colorToken}>
      <Table data-fixed>
        <thead>
          <tr>
            <th aria-label='Farger' />
            {GROUPS.map(([name, variants]) => (
              <th colSpan={variants.length} key={name}>
                {toUpper(name)}
              </th>
            ))}
          </tr>
          <tr>
            <th />
            {GROUPS.flatMap(([name, variants]) =>
              variants.map(([variant, desc], i) => (
                <th key={`${name}-${variant}`} data-i={i}>
                  {toUpper(variant)}
                  {!!desc && <small>{desc}</small>}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {COLORS.map((color) => (
            <tr key={color}>
              <th>{toUpper(color)}</th>
              {GROUPS.map(([name, variants]) =>
                variants.map(([variant], i) => {
                  const colorPrefix = color === 'primary' ? '' : `${color}-`
                  const token = `var(--ds-color-${colorPrefix}${name}-${variant})`

                  return (
                    <td key={`${name}-${variant}`} data-i={i}>
                      <Card asChild>
                        <button
                          type='button'
                          data-tooltip={copiedToken === token ? COPIED_LABEL : token}
                          onClick={() => handleCopy(token)}
                          style={{ background: token }}
                        />
                      </Card>
                    </td>
                  )
                })
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </figure>
  )
}
