import { LoaderContainer } from './Loader.elements'
import { LoaderProps } from './Loader.types'

export const Loader = ({ size = 'medium', color = '#fff' }: LoaderProps) => {
  return (
    <LoaderContainer $size={size} $color={color}>
      <div />
      <div />
      <div />
    </LoaderContainer>
  )
}
