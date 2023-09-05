'use client'

import { useState } from 'react'

import { Box, Text, Image, Button, Highlight } from '@core'
import { useUsers, useSetUsersData } from '@queries'
import { Input } from '@core/Input'

import art1 from './1.png'
import art2 from './2.png'
import { HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  const [canLoadUsers, setCanLoadUsers] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const { isLoading, data: users } = useUsers({
    enabled: canLoadUsers,
  })

  const setUsersData = useSetUsersData()

  const setNewUsersHandler = () => {
    setUsersData([
      {
        id: 1,
        name: 'Max Zolotoi',
      },
      {
        id: 2,
        name: 'Oleg Chernov',
      },
    ])
  }

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

      <Box mt={20} gap={10} flexDirection="row">
        {!canLoadUsers && <Button onClick={() => setCanLoadUsers(true)}>Load users</Button>}
        {canLoadUsers && <Button onClick={setNewUsersHandler}>Set users value</Button>}
      </Box>

      <Box>
        <Box flexDirection="column" mt={20} maxWidth={400}>
          <Input
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            placeholder="Username"
          />
          <Input
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            placeholder="Username"
          />
          <Input
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            placeholder="Username"
          />
        </Box>
      </Box>

      {canLoadUsers && (
        <Box gap={16} maxWidth={600} margin="50px auto" flexDirection="row" flexWrap="wrap">
          {!isLoading ? (
            users?.map((user) => (
              <Box
                key={user.id}
                p={10}
                alignItems="center"
                textAlign="center"
                border="1px solid #222"
                borderRadius={8}>
                {user.name}
              </Box>
            ))
          ) : (
            <Box>Users Loading...</Box>
          )}
        </Box>
      )}

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
