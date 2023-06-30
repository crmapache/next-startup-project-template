'use client'

import styled, { css } from 'styled-components'

import { LoaderSize } from './Loader.types'

export const LoaderContainer = styled.div<{ $size: LoaderSize; $color: string }>`
  display: flex;

  & > div {
    border: 1px solid ${({ $color }) => $color};
    border-radius: 50%;
    transform: scale(0);
    animation: scaleCircle 1s ease infinite;
    transition: border-color 0.2s;

    &:nth-child(2) {
      animation: scaleCircle 1s ease infinite ${1000 * 0.3}ms;
    }

    &:nth-child(3) {
      animation: scaleCircle 1s ease infinite ${1000 * 0.6}ms;
    }

    @keyframes scaleCircle {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  ${({ $size }) =>
    $size === 'small' &&
    css`
      gap: 6px;

      & > div {
        width: 6px;
        height: 6px;
      }
    `}

  ${({ $size }) =>
    $size === 'medium' &&
    css`
      gap: 10px;

      & > div {
        width: 10px;
        height: 10px;
      }
    `}

  ${({ $size }) =>
    $size === 'large' &&
    css`
      gap: 15px;

      & > div {
        width: 15px;
        height: 15px;
      }
    `}
`
