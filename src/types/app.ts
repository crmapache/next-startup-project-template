import { ReactNode, CSSProperties } from 'react'
import { RuleSet } from 'styled-components'

import { LoaderSize } from '@core/Loader/Loader.types'

export type RootLayoutProps = {
  children: ReactNode
}

export type TextVariant = {
  fontFamily: CSSProperties['fontFamily']
  fontWeight: CSSProperties['fontWeight']
  fontSize: CSSProperties['fontSize']
  lineHeight: CSSProperties['lineHeight']
  letterSpacing: CSSProperties['letterSpacing']
  textTransform: CSSProperties['textTransform']
}

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
