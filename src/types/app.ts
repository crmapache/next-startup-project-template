import { ReactNode } from 'react'

import { typographyVariants } from '@styles/typography-variants'

import { Locale } from '../../i18n.config'

export type RootLayoutProps = {
  children: ReactNode
  params: {
    lang: Locale
  }
}

export type TypographyVariantLiterals = keyof typeof typographyVariants
