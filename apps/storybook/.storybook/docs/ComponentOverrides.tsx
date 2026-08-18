import { useEffect, useState } from 'react'
import type { ComponentProps } from 'react'

import { ArrowDownIcon } from '@navikt/aksel-icons'
import { Button, Heading, Paragraph } from '@statisticsnorway/design-react'

import styles from './componentOverrides.module.css'

import { scrollToId } from '.'

type AnchorLink = {
  id: string
  text: string
}

const withClassName = (className: string, incoming?: string) => [className, incoming].filter(Boolean).join(' ')

export const mdxComponents = {
  h1: ({ className, ...props }: ComponentProps<'h1'>) => (
    <Heading data-size='2xl' level={1} className={withClassName(styles.heading, className)} {...props} />
  ),
  h2: ({ className, ...props }: ComponentProps<'h2'>) => (
    <Heading data-size='lg' level={2} className={withClassName(styles.heading, className)} {...props} />
  ),
  h3: ({ className, ...props }: ComponentProps<'h3'>) => (
    <Heading data-size='md' level={3} className={withClassName(styles.heading, className)} {...props} />
  ),
  h4: ({ className, ...props }: ComponentProps<'h4'>) => (
    <Heading data-size='sm' level={4} className={withClassName(styles.heading, className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps<'blockquote'>) => (
    <blockquote {...props} className={withClassName(styles.ingress, className)} />
  ),
  p: ({ className, ...props }: ComponentProps<'p'>) => (
    <Paragraph {...props} className={withClassName(styles.paragraph, className)} />
  ),
  ul: ({ className, ...props }: ComponentProps<'ul'>) => <ul {...props} className={withClassName(styles.list, className)} />,
  ol: ({ className, ...props }: ComponentProps<'ol'>) => <ol {...props} className={withClassName(styles.list, className)} />,
  li: ({ className, ...props }: ComponentProps<'li'>) => (
    <li {...props} className={withClassName(styles.listItem, className)} />
  ),
  a: ({ className, ...props }: ComponentProps<'a'>) => (
    <a {...props} className={withClassName(`ds-link ${styles.link}`, className)} />
  ),
  code: ({ className, ...props }: ComponentProps<'code'>) => (
    <code {...props} className={withClassName(styles.code, className)} />
  ),
  pre: ({ className, ...props }: ComponentProps<'pre'>) => <pre {...props} className={withClassName(styles.pre, className)} />,
}

export function AnchorLinks() {
  const [links, setLinks] = useState<AnchorLink[]>([])

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLHeadingElement>('.sbdocs-content h2'))

    setLinks(
      headings
        .filter((heading) => heading.id && heading.textContent)
        .map((heading) => ({
          id: heading.id,
          text: heading.textContent ?? '',
        }))
    )
  }, [])

  if (links.length === 0) {
    return null
  }

  return (
    <menu className='anchor-links' aria-label='Seksjoner på siden'>
      {links.map(({ id, text }) => (
        <li key={id}>
          <Button data-variant='tertiary' onClick={() => scrollToId(id)}>
            <ArrowDownIcon aria-hidden />
            <span>{text}</span>
          </Button>
        </li>
      ))}
    </menu>
  )
}
