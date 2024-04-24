import { RootLayoutProps } from '@types'
import StyledComponentsRegistry from '@lib/registry'

import { i18n } from '../../../../../i18n.config'

import '@styles/globals.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const MainLayout = ({ children, params: { lang } }: RootLayoutProps) => {
  return (
    <html lang={lang}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
