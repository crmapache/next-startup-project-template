import { ReactNode } from 'react'

import { TypographyVariantLiterals } from '@types'

export type TypographyProps = {
  children: ReactNode | ReactNode[] | string | number
  variant?: TypographyVariantLiterals
  as?: TypographyTagsLiterals
}

export type TypographyTagsLiterals = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
