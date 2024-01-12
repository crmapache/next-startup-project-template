import { typographyVariants } from '@styles/typography-variants'

import { TypographyContainer } from './Typography.elements'
import { TypographyProps } from './Typography.types'

export const Typography = ({ as = 'span', variant = 'body', children }: TypographyProps) => {
  const variantStyles = typographyVariants[variant]

  return (
    <TypographyContainer as={as} $variantStyles={variantStyles}>
      {children}
    </TypographyContainer>
  )
}
