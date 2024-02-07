'use client'

import styled, { css, RuleSet } from 'styled-components'

export const ButtonContainer = styled.button<{
  $variantStyles: RuleSet
  $loading: boolean
  $link: boolean
  $disabled: boolean
}>`
  border-radius: 4px;
  border: none;
  outline: none;
  transition: all 0.2s;
  user-select: none;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
  }

  ${({ $loading }) =>
    $loading &&
    css`
      pointer-events: none;
    `}

  ${({ $link, $disabled }) =>
    $link &&
    $disabled &&
    css`
      pointer-events: none;
    `}

  ${({ $variantStyles }) => $variantStyles};
`

export const Content = styled.div<{ $loading: boolean }>`
  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
`

export const LoaderContainer = styled.div<{ $loading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: ${({ $loading }) => ($loading ? 1 : 0)};
`
