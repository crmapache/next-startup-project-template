import { ReactNode } from 'react'
import { RuleSet } from 'styled-components'

import { typographyVariants } from '@styles/typography-variants'
import { LoaderSize } from '@core/Loader/Loader.types'

export type RootLayoutProps = {
  children: ReactNode
}

export type TypographyVariantLiterals = keyof typeof typographyVariants

export type ButtonVariant = (disabled: boolean) => {
  styles: RuleSet
  loader?: {
    size?: LoaderSize
    color?: string
  }
  disabledLoader: {
    size?: LoaderSize
    color?: string
  }
}
