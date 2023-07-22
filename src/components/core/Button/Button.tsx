'use client'

import { useMemo } from 'react'
import Link from 'next/link'

import { Loader } from '@core/Loader'
import { buttonVariants } from '@styles/button-variants'

import { Content, ButtonContainer, LoaderContainer } from './Button.elements'
import { ButtonProps } from './Button.types'

export const Button = ({
  children,
  href,
  variant = 'primaryMedium',
  loading = false,
  ...rest
}: ButtonProps) => {
  const {
    styles: variantStyles,
    loader: loaderProps,
    disabledLoader: disabledLoaderProps,
  } = buttonVariants[variant](!!rest.disabled)

  const loaderMergedProps = useMemo(() => {
    if (rest.disabled) {
      return Object.assign({}, loaderProps, disabledLoaderProps)
    }

    return Object.assign({}, loaderProps)
  }, [rest.disabled, loaderProps, disabledLoaderProps])

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
          <Loader {...loaderMergedProps} />
        </LoaderContainer>
      )}
    </ButtonContainer>
  )
}
