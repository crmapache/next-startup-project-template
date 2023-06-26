import { GeneralLayout } from '@features'
import { RootLayoutProps } from '@types'

export const metadata = {
  title: 'Profile',
  description: 'profile page',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <GeneralLayout>{children}</GeneralLayout>
}
