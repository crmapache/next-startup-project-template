import { MainProvider } from '@providers'
import { RootLayoutProps } from '@types'

export default function RootLayout({ children }: RootLayoutProps) {
  return <MainProvider>{children}</MainProvider>
}
