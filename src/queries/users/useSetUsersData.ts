import { useQueryClient } from 'react-query'

import { QueryKeys } from '@queries'
import { User } from '@types'

export const useSetUsersData = () => {
  const queryClient = useQueryClient()

  return (users: User[]) => queryClient.setQueryData(QueryKeys.USERS, users)
}
