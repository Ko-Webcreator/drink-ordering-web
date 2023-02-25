export const OrderList = {
  Coffee: 0,
  Tea: 1,
  Milk: 2,
  Coke: 3,
  Beer: 4,
} as const
export type OrderType = typeof OrderList[keyof typeof OrderList]
