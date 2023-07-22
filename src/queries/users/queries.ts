import { User } from '@types'

import { query } from './../query'

export const getAllUsers = async (): Promise<User[]> => {
  const response = await query.get('https://jsonplaceholder.typicode.com/users')

  if (response.ok) {
    return await response.json()
  }

  return []
}
