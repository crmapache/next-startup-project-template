import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

import { User } from '@types'

import { QueryKeys } from './../keys'
import { getAllUsers } from './queries'

export const useUsers = (options?: UseQueryOptions<User[], unknown, User[], QueryKey[]>) => {
  return useQuery<User[], unknown, User[], QueryKey[]>([QueryKeys.USERS], getAllUsers, options)
}
