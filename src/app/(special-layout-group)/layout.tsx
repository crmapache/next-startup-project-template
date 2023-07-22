import { GeneralLayout } from '@features'
import { MainProvider } from '@providers'
import { RootLayoutProps } from '@types'

export const metadata = {
  title: 'Profile',
  description: 'profile page',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <MainProvider>
      <GeneralLayout>{children}</GeneralLayout>
    </MainProvider>
  )
}
