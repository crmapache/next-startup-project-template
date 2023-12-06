import { textVariants } from '@styles/text-variants'

import { TextContainer } from './Text.elements'
import { TextProps } from './Text.types'

export const Text = ({ as = 'span', variant = 'body', children }: TextProps) => {
  const variantStyles = textVariants[variant]

  return (
    <TextContainer as={as} $variantStyles={variantStyles}>
      {children}
    </TextContainer>
  )
}
