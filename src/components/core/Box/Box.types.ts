import { ReactNode, CSSProperties } from 'react'
import { RuleSet } from 'styled-components'

export type BoxProps = {
  children: ReactNode | ReactNode[]
  sx?: RuleSet
  as?: string
} & (CSSProperties & { [key in CustomStyleLiterals]?: string | number })

export type CustomStyleLiterals =
  | 'bgcolor'
  | 'm'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'mt'
  | 'mx'
  | 'my'
  | 'p'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'pt'
  | 'px'
  | 'py'
