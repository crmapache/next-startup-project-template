import { useInvalidateQuery } from '@hooks'

import { QueryKeys } from './../keys'

export const useInvalidateUsers = () => useInvalidateQuery(QueryKeys.USERS)
