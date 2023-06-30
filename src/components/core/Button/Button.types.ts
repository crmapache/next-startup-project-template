import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { buttonVariants } from '@styles/button-variants'

export type ButtonProps = {
  children: ReactNode | string | number
  variant?: keyof typeof buttonVariants
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLLinkElement>
