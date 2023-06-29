import { ReactNode, CSSProperties } from 'react'
import { RuleSet } from 'styled-components'

import { textVariants } from '@styles/text-variants'

export type TextProps = {
  children: ReactNode | ReactNode[] | string | number
  variant?: keyof typeof textVariants
  sx?: RuleSet
  as?: TextTagsLiterals
} & TextStyles & { [key in TextCustomStyleLiterals]?: string | number }

export type TextStyles = Pick<
  CSSProperties,
  | 'margin'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'color'
  | 'textDecoration'
  | 'textAlign'
>

export type TextTagsLiterals = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextCustomStyleLiterals =
  | 'align'
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
