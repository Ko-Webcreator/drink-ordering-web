import { ButtonType } from 'types/button'

export const buttonLinks = [
  {
    id: 0,
    label: 'コーヒー',
    price: 480,
    type: ButtonType.Coffee,
  },
  {
    id: 1,
    label: '紅茶',
    price: 280,
    type: ButtonType.Tea,
  },
  {
    id: 2,
    label: 'ミルク',
    price: 180,
    type: ButtonType.Milk,
  },
  {
    id: 3,
    label: 'コーラー',
    price: 190,
    type: ButtonType.Coke,
  },
  {
    id: 4,
    label: 'ビール',
    price: 580,
    type: ButtonType.Beer,
  },
] as const
