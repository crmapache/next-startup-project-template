import { ReactNode } from 'react'

import { typographyVariants } from '@styles/typography-variants'

export type RootLayoutProps = {
  children: ReactNode
}

export type TypographyVariantLiterals = keyof typeof typographyVariants
