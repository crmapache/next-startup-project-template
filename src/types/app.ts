import { ReactNode, CSSProperties } from 'react'

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
