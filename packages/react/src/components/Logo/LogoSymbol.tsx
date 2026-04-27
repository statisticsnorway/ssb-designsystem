import type { SVGProps } from 'react'

export type LogoSymbolProps = SVGProps<SVGSVGElement> & {
  variant?: 'black' | 'white'
  height?: number
}

export function LogoSymbol({ variant = 'black', height = 50, ...rest }: LogoSymbolProps) {
  const fill = variant === 'white' ? '#FFFFFF' : '#274247'

  return (
    <svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='420 420 1660 1660' height={height} {...rest}>
      <path
        d='m1331.14,1391.68l704.8-406.94c-110.75-328.15-420.42-564.74-785.94-564.74-458.4,0-830,371.6-830,830,0,63.14,7.68,124.39,21.03,183.49l780.7-450.05,109.41,408.23Z'
        fill={fill}
      />
      <path
        d='m1279.36,1516.65l-109.41-408.29-705.88,406.91c110.75,328.15,420.42,564.74,785.94,564.74,458.4,0,830-371.6,830-830,0-63.13-7.67-124.36-21.02-183.45l-779.62,450.09Z'
        fill={fill}
      />
    </svg>
  )
}
