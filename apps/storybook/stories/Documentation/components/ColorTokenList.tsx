import css from '../../../../../packages/css/theme/ssb.css?raw'
import styles from './ColorTokenList.module.css'

const toUpper = (str: string) => str.replace(/\b./g, (m) => m.toUpperCase())

const COLORS = ['primary', 'neutral', 'secondary', 'magic'] as const

const GROUPS = [
  ['background', ['default', 'tinted']],
  ['surface', ['default', 'tinted', 'hover', 'active']],
  ['border', ['subtle', 'default', 'strong']],
  ['text', ['subtle', 'default']],
  ['base', ['default', 'hover', 'active', 'contrast-subtle', 'contrast-default']],
] as const

// Only the first match per token is kept, which corresponds to the light color-scheme block in the CSS file.
const HEX_BY_TOKEN = Object.fromEntries(
  Array.from(css.matchAll(/--ds-color-([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8});/g)).reduce<[string, string][]>(
    (entries, [, name, hex]) => (entries.some(([n]) => n === name) ? entries : [...entries, [name, hex]]),
    []
  )
)

export const ColorTokenList = () => (
  <div className={styles.colorTokenList}>
    {COLORS.map((color) => (
      <section key={color}>
        <h3>{toUpper(color)}</h3>
        {GROUPS.map(([group, variants]) => (
          <div key={group} className={styles.group}>
            <span className={styles.groupLabel}>{toUpper(group)}</span>
            <div className={styles.groupContent}>
              <div className={styles.bar}>
                {variants.map((variant) => (
                  <span
                    key={variant}
                    className={styles.segment}
                    style={{ background: `var(--ds-color-${color}-${group}-${variant})` }}
                  />
                ))}
              </div>
              <div className={styles.labels}>
                {variants.map((variant) => {
                  const tokenName = `${color}-${group}-${variant}`

                  return (
                    <div key={variant} className={styles.label}>
                      <span className={styles.variant}>{variant}</span>
                      <code className={styles.hex}>{HEX_BY_TOKEN[tokenName]}</code>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </section>
    ))}
  </div>
)
