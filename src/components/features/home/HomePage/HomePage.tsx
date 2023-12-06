'use client'

import { Text } from '@core'

import { HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Text as="h1" variant="title">
        Home
      </Text>
    </HomePageContainer>
  )
}
