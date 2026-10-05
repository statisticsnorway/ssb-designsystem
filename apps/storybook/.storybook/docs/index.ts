import reactPackage from '../../../../packages/react/package.json'

export const version = reactPackage.version

export const scrollToId = (id: string) => {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export const openDetailsAndScrollToId = (detailsId: string, targetId = detailsId) => {
  const element = document.getElementById(detailsId)

  if (!(element instanceof HTMLDetailsElement)) return

  element.open = true
  window.history.pushState(null, '', `#${targetId}`)
  scrollToId(targetId)
}
