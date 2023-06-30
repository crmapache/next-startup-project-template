import { css } from 'styled-components'

import { ButtonVariant } from '@types'

export const buttonVariants: Record<string, ButtonVariant> = {
  primaryMedium: (disabled: boolean) => ({
    styles: css`
      background-color: #4caf50;
      color: #fff;
      padding: 10px 25px;
      font-size: 16px;
      line-height: 20px;

      &:hover {
        background-color: #558b2f;
      }

      &:active {
        background-color: #385b24;
      }

      &:disabled {
        background-color: #e0e0e0;
        color: #a2a2a2;
      }

      ${disabled &&
      css`
        background-color: #e0e0e0;
        color: #a2a2a2;
      `}
    `,
    loader: {
      size: 'small',
    },
    disabledLoader: {
      color: '#a2a2a2',
    },
  }),
}
