'use client'

import { useState } from 'react'

import { Box, Text } from '@core'
import { Button } from '@core/Button'

import { HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <HomePageContainer>
      <Text as="h1" variant="title">
        Home
      </Text>
      <Box mt={20} gap={10} flexDirection="row">
        <Button onClick={() => console.log('test')} disabled={disabled} loading={loading} href="/">
          Button
        </Button>

        <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
        <Button onClick={() => setDisabled(!disabled)}>Toggle Disabled</Button>
      </Box>
    </HomePageContainer>
  )
}
