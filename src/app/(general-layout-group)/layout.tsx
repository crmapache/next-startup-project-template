import { GeneralLayout } from '@features'
import { RootLayoutProps } from '@types'

export const metadata = {
  title: 'Home',
  description: 'home page',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <GeneralLayout>{children}</GeneralLayout>
}
