import Link from 'next/link'

import { GeneralNavigationContainer } from '@features/navigation/GeneralNavigation/GeneralNavigation.elements'

export const GeneralNavigation = () => {
  return (
    <GeneralNavigationContainer>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/profile/settings">Settings</Link>
    </GeneralNavigationContainer>
  )
}
