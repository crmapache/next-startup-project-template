'use client'

import { useState, createContext } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { Theme } from '@types'
import { themeDark, themeLight } from '@styles/theme'

import { ThemeProviderProp } from './ThemeProvider.types'

export const ThemeContext = createContext({
  theme: themeLight,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: ThemeProviderProp) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const theme = themeMode === 'light' ? themeLight : themeDark

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={theme as Theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
