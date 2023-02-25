import { OrderList } from 'types/order'

export const buttonLinks = [
  {
    id: 0,
    label: 'コーヒー',
    price: 480,
    type: OrderList.Coffee,
  },
  {
    id: 1,
    label: '紅茶',
    price: 280,
    type: OrderList.Tea,
  },
  {
    id: 2,
    label: 'ミルク',
    price: 180,
    type: OrderList.Milk,
  },
  {
    id: 3,
    label: 'コーラー',
    price: 190,
    type: OrderList.Coke,
  },
  {
    id: 4,
    label: 'ビール',
    price: 580,
    type: OrderList.Beer,
  },
] as const
