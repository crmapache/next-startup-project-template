'use client'

import styled, { css } from 'styled-components'

export const StyledInput = styled.input`
  outline: none;
  padding: 10px 16px;
  font-size: 16px;
  color: #222;
  border: 2px solid #b0bec5;
  border-radius: 8px;
  width: 100%;
`

export const Placeholder = styled.div`
  position: absolute;
  top: 29px;
  left: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  pointer-events: none;
  transition: all 0.2s;
  background-color: transparent;
  padding: 0 4px;
  border-radius: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(100% - 32px);
`

export const InputContainer = styled.div<{
  $focused: boolean
  $hasValue: boolean
  $error: boolean
}>`
  overflow: hidden;
  position: relative;
  padding: 16px 0;
  width: 100%;

  ${({ $focused }) =>
    $focused &&
    css`
      ${StyledInput} {
        border-color: #03a9f4;
      }
    `}

  ${({ $error }) =>
    $error &&
    css`
      ${StyledInput} {
        border-color: #f44336;
      }
    `}

  ${({ $focused, $hasValue }) =>
    ($focused || $hasValue) &&
    css`
      ${Placeholder} {
        top: 8px;
        left: 8px;
        color: rgba(0, 0, 0, 0.8);
        background-color: #fff;
        max-width: calc(100% - 16px);
      }
    `}
`

export const ErrorContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  line-height: 12px;
  color: #f44336;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
