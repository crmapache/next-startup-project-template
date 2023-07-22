'use client'

import { useState } from 'react'

import { Box, Text, Button, Highlight } from '@core'

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
      <Box mt={20}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est incidunt laudantium
          non ratione reiciendis rerum sequi? Dignissimos ducimus eaque earum ipsa, molestiae
          provident quibusdam quisquam recusandae? A asperiores distinctio eveniet hic porro,
          sapiente <Highlight color="red">highlight with passed color</Highlight> ullam voluptate!
          Aliquam est iusto praesentium quia temporibus vero! Amet, animi atque debitis eaque error
          maiores recusandae repellendus tempore tenetur voluptatem. Aliquid aut blanditiis cum id,
          ipsa <Highlight href="/">highlight as a link</Highlight> qui quis rem rerum tempora totam
          voluptate. <Highlight>highlight as regular text</Highlight> eos error fugiat illum iste
          nostrum. Consequatur, corporis cumque delectus deleniti dolore eveniet ipsam laboriosam
          necessitatibus odit quis quo quod saepe sequi sunt suscipit tempora ullam vero voluptate!
        </Text>
      </Box>
    </HomePageContainer>
  )
}
