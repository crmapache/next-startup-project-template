import { MainLayout } from '@features'
import { MainProvider } from '@providers'
import { RootLayoutProps } from '@types'

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <MainProvider>
      <MainLayout>{children}</MainLayout>
    </MainProvider>
  )
}
