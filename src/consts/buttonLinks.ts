import { OrderType } from 'types/order'

export const buttonLinks = [
  {
    id: 0,
    label: 'コーヒー',
    price: 480,
    type: OrderType.Coffee,
  },
  {
    id: 1,
    label: '紅茶',
    price: 280,
    type: OrderType.Tea,
  },
  {
    id: 2,
    label: 'ミルク',
    price: 180,
    type: OrderType.Milk,
  },
  {
    id: 3,
    label: 'コーラー',
    price: 190,
    type: OrderType.Coke,
  },
  {
    id: 4,
    label: 'ビール',
    price: 580,
    type: OrderType.Beer,
  },
] as const
