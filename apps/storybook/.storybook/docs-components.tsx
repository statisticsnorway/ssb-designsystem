import { useEffect, useState } from 'react'

import { ArrowDownIcon } from '@navikt/aksel-icons'
import { Button } from '@statisticsnorway/design-react'

import { scrollToId } from './docs'

type AnchorLink = {
  id: string
  text: string
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
