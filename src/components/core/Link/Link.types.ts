import { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

export type LinkProps = {
  children: ReactNode
  locale?: string
} & NextLinkProps
