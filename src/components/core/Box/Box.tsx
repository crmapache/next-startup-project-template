import { BoxElement } from './Box.elements'
import { BoxProps } from './Box.types'
import { prepareStyles } from './Box.utils'

export const Box = ({ sx, as, children, ...rest }: BoxProps) => {
  const style = prepareStyles(rest)

  return (
    <BoxElement as={as} $sx={sx} $style={style}>
      {children}
    </BoxElement>
  )
}
