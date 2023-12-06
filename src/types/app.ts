import { ReactNode } from 'react'
import { RuleSet } from 'styled-components'

import { textVariants } from '@styles/text-variants'
import { LoaderSize } from '@core/Loader/Loader.types'

export type RootLayoutProps = {
  children: ReactNode
}

export type TextVariantLiterals = keyof typeof textVariants

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
