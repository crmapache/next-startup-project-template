'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const HighlightContainer = styled(Link)<{ $color: string }>`
  display: inline;
  transition: color 0.2s;
  color: ${({ $color }) => $color};
`
