import { MainLayout } from '@features'
import { MainProvider } from '@providers'
import { RootLayoutProps } from '@types'
import { getDictionary } from '@lib/dictionary'

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const dictionary = await getDictionary(params.lang)

  return (
    <MainProvider dictionary={dictionary}>
      <MainLayout params={params}>{children}</MainLayout>
    </MainProvider>
  )
}
