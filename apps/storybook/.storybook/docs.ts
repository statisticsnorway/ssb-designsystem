import reactPackage from '../../../packages/react/package.json'

export const version = reactPackage.version

export const scrollToId = (id: string) => {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
