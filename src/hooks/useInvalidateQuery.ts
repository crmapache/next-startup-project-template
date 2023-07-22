import { useQueryClient } from 'react-query'

export const useInvalidateQuery = (keys: string | string[]) => {
  const queryClient = useQueryClient()

  return () => queryClient.invalidateQueries({ queryKey: typeof keys === 'string' ? [keys] : keys })
}
