import { MainLayout } from '@features'
import { MainProvider } from '@providers'
import { RootLayoutProps } from '@types'

export default async function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <MainProvider>
      <MainLayout params={params}>{children}</MainLayout>
    </MainProvider>
  )
}
