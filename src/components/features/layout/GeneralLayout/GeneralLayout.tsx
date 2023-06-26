import { GeneralNavigation } from '@features'
import { RootLayoutProps } from '@types'
import StyledComponentsRegistry from '@lib/registry'

import '@styles/globals.css'

export const GeneralLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GeneralNavigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
