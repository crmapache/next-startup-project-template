import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { RuleSet } from 'styled-components'

import { Theme } from '@types'

import { LoaderSize } from '../Loader'

export type ButtonVariantLiterals = 'primary' | 'secondary'

type ButtonVariantProps = {
  disabled: boolean
  theme: Theme
}

export type ButtonVariant = ({ disabled, theme }: ButtonVariantProps) => {
  styles: RuleSet
  loader?: {
    size?: LoaderSize
    color?: string
  }
}

export type ButtonProps = {
  children: ReactNode | string | number
  locale?: string
  variant?: ButtonVariantLiterals
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLLinkElement>
