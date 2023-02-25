import { OrderType } from 'types/order'

export type OrderItemsReq = {
  id: number
  label: string
  price: number
  type: OrderType
}
