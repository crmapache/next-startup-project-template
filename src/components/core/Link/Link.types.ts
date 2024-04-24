import { ReactNode } from 'react'

export type LinkProps = {
  href: string
  lang: string
  children: ReactNode
  [key: string]: any
}
