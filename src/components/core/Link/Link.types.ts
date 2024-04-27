import { ReactNode, HTMLAttributeAnchorTarget } from 'react'
import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = {
  children: ReactNode
  locale?: string
  target?: HTMLAttributeAnchorTarget
} & NextLinkProps
