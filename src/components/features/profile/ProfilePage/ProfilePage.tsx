import { Text } from '@core'

import { ProfilePageContainer } from './ProfilePage.elements'

export const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Text as="h1" variant="title">
        Profile
      </Text>
    </ProfilePageContainer>
  )
}
