import { darken } from 'polished'
import { css } from 'styled-components'

import { ButtonVariant, ButtonVariantLiterals } from '@core'

export const buttonVariants: Record<ButtonVariantLiterals, ButtonVariant> = {
  primary: ({ disabled, theme }) => ({
    styles: css`
      background-color: ${({ theme }) => theme.button.primary.background};
      color: ${({ theme }) => theme.button.primary.text};
      padding: 10px 25px;
      font-size: 16px;
      line-height: 20px;

      &:hover {
        background-color: ${({ theme }) => darken(0.05, theme.button.primary.background)};
      }

      &:active {
        background-color: ${({ theme }) => darken(0.08, theme.button.primary.background)};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.button.primaryDisabled.background};
        color: ${({ theme }) => theme.button.primaryDisabled.text};
      }

      ${disabled &&
      css`
        background-color: ${({ theme }) => theme.button.primaryDisabled.background};
        color: ${({ theme }) => theme.button.primaryDisabled.text};
      `}
    `,
    loader: {
      size: 'small',
      color: disabled ? theme.button.primary.text : theme.button.primaryDisabled.text,
    },
  }),
  secondary: ({ disabled, theme }) => ({
    styles: css`
      background-color: ${({ theme }) => theme.button.secondary.background};
      color: ${({ theme }) => theme.button.secondary.text};
      padding: 10px 25px;
      font-size: 16px;
      line-height: 20px;

      &:hover {
        background-color: ${({ theme }) => darken(0.05, theme.button.secondary.background)};
      }

      &:active {
        background-color: ${({ theme }) => darken(0.08, theme.button.secondary.background)};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.button.secondaryDisabled.background};
        color: ${({ theme }) => theme.button.secondaryDisabled.text};
      }

      ${disabled &&
      css`
        background-color: ${({ theme }) => theme.button.secondaryDisabled.background};
        color: ${({ theme }) => theme.button.secondaryDisabled.text};
      `}
    `,
    loader: {
      size: 'small',
      color: disabled ? theme.button.secondary.text : theme.button.secondaryDisabled.text,
    },
  }),
}
