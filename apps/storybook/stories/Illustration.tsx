import illustration from '../assets/svg/illustrasjon-designsystemet-liggende.svg?raw'

export function Illustration() {
  return <div className='illustration' dangerouslySetInnerHTML={{ __html: illustration }} />
}
