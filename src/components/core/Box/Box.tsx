import { BoxElement } from './Box.elements'
import { BoxProps } from './Box.types'
import { prepareStyles } from './Box.utils'

export const Box = ({ sx, as, children, ...rest }: BoxProps) => {
  const style = prepareStyles(rest)

  return (
    <BoxElement $sx={sx} $style={style} as={as}>
      {children}
    </BoxElement>
  )
}
