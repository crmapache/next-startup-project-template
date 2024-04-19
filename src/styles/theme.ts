import { Theme } from '@types'

import { colorPalette } from './color-palette'

export const themeLight: Theme = {
  brand: {
    primary: colorPalette.gold[500],
  },
  background: {
    primary: colorPalette.basegray[50],
  },
  text: {
    primary: colorPalette.basegray[700],
  },
  button: {
    primary: {
      text: colorPalette.basegray[50],
      background: colorPalette.gold[500],
      loader: colorPalette.basegray[50],
    },
    primaryDisabled: {
      text: colorPalette.basegray[300],
      background: colorPalette.basegray[200],
      loader: colorPalette.basegray[300],
    },
    secondary: {
      text: colorPalette.basegray[50],
      background: colorPalette.basegray[300],
      loader: colorPalette.basegray[50],
    },
    secondaryDisabled: {
      text: colorPalette.basegray[300],
      background: colorPalette.basegray[200],
      loader: colorPalette.basegray[300],
    },
  },
}

export const themeDark: Theme = {
  brand: {
    primary: colorPalette.gold[500],
  },
  background: {
    primary: colorPalette.basegray[700],
  },
  text: {
    primary: colorPalette.basegray[50],
  },
  button: {
    primary: {
      text: colorPalette.basegray[50],
      background: colorPalette.gold[500],
      loader: colorPalette.basegray[50],
    },
    primaryDisabled: {
      text: colorPalette.basegray[500],
      background: colorPalette.basegray[600],
      loader: colorPalette.basegray[500],
    },
    secondary: {
      text: colorPalette.basegray[50],
      background: colorPalette.basegray[400],
      loader: colorPalette.basegray[50],
    },
    secondaryDisabled: {
      text: colorPalette.basegray[300],
      background: colorPalette.basegray[200],
      loader: colorPalette.basegray[300],
    },
  },
}
