import useSWRMutation from 'swr/immutable'
import { customAxios } from 'libs/customAxios'
import { OrderItemsReq } from 'types/api/orderItems'

export const useOderItems = () => {
  const { fetcher } = customAxios()
  const { data, error, isLoading } = useSWRMutation<OrderItemsReq[]>(
    'mocks/order-items/',
    fetcher
  )

  return {
    data,
    error,
    isLoading,
  }
}
