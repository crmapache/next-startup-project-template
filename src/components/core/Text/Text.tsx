import { textVariants } from '@styles/text-variants'

import { TextContainer } from './Text.elements'
import { TextProps } from './Text.types'
import { prepareStyles } from './Text.utils'

export const Text = ({ sx, as = 'span', variant = 'body', children, ...rest }: TextProps) => {
  const styles = prepareStyles(rest)
  const variantStyles = textVariants[variant]

  return (
    <TextContainer as={as} $sx={sx} $styles={styles} $variantStyles={variantStyles}>
      {children}
    </TextContainer>
  )
}
