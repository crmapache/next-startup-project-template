import Link from 'next/link'

import { HighlightContainer } from './Highlight.elements'
import { HighlightProps } from './Highlight.types'

export const Highlight = ({ color = '#ff8000', href, children }: HighlightProps) => {
  return (
    <HighlightContainer as={href ? Link : 'span'} href={href ?? ''} $color={color}>
      {children}
    </HighlightContainer>
  )
}
