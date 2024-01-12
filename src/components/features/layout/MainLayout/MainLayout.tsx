import { RootLayoutProps } from '@types'
import StyledComponentsRegistry from '@lib/registry'

import '@styles/globals.css'

export const MainLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
