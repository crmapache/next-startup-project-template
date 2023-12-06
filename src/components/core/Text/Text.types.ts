import { ReactNode } from 'react'

import { TextVariantLiterals } from '@types'

export type TextProps = {
  children: ReactNode | ReactNode[] | string | number
  variant?: TextVariantLiterals
  as?: TextTagsLiterals
}

export type TextTagsLiterals = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
