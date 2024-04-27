'use client'

import { useContext } from 'react'

import { Loader } from '@core'
import { ThemeContext } from '@providers'
import { buttonVariants } from '@styles/button-variants'

import { Link } from '../Link'
import { Content, ButtonContainer, LoaderContainer } from './Button.elements'
import { ButtonProps } from './Button.types'

export const Button = ({
  children,
  href,
  variant = 'primary',
  loading = false,
  ...rest
}: ButtonProps) => {
  const { theme } = useContext(ThemeContext)

  const { styles: variantStyles, loader: loaderProps } = buttonVariants[variant]({
    disabled: !!rest.disabled,
    theme,
  })

  return (
    <ButtonContainer
      as={href ? Link : 'button'}
      {...rest}
      {...(href ? { href } : {})}
      $variantStyles={variantStyles}
      $loading={loading}
      $link={!!href}
      $disabled={!!rest.disabled}>
      <Content $loading={loading}>{children}</Content>
      {loading && (
        <LoaderContainer $loading={loading}>
          <Loader {...loaderProps} />
        </LoaderContainer>
      )}
    </ButtonContainer>
  )
}
