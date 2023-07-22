import { Metadata } from 'next'

import { ProfilePage } from '@features'

export const metadata: Metadata = {
  title: 'Profile Page',
}

export default function Profile() {
  return <ProfilePage />
}
