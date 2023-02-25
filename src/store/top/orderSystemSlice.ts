import { RootState } from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderType, OrderList } from 'types/order'

type State = {
  coffeeCount: number
  teaCount: number
  milkCount: number
  cokeCount: number
  beerCount: number
  totalCount: number
  totalPrice: number
}

const initialState: State = {
  coffeeCount: 0,
  teaCount: 0,
  milkCount: 0,
  cokeCount: 0,
  beerCount: 0,
  totalCount: 0,
  totalPrice: 0,
}

const orderSystemSlice = createSlice({
  name: 'orderSystemSlice',
  initialState,
  reducers: {
    addCountState: (
      state,
      { payload }: PayloadAction<{ orderType: OrderType; price: number }>
    ) => {
      // total 処理
      state.totalCount += 1
      state.totalPrice += payload.price

      // 個別カウントを1カウントプラスする
      if (payload.orderType === OrderList.Coffee) {
        state.coffeeCount += 1
        return
      }
      if (payload.orderType === OrderList.Tea) {
        state.teaCount += 1
        return
      }
      if (payload.orderType === OrderList.Milk) {
        state.milkCount += 1
        return
      }
      if (payload.orderType === OrderList.Coke) {
        state.cokeCount += 1
        return
      }
      if (payload.orderType === OrderList.Beer) {
        state.beerCount += 1
        return
      }
    },
  },
})

// Actions
export const { addCountState } = orderSystemSlice.actions

// Selectors
export const selectOrderCount = (
  { orderSystem: state }: RootState,
  orderType: OrderType
) => {
  if (orderType === OrderList.Coffee) {
    return state.coffeeCount
  }
  if (orderType === OrderList.Tea) {
    return state.teaCount
  }
  if (orderType === OrderList.Milk) {
    return state.milkCount
  }
  if (orderType === OrderList.Coke) {
    return state.cokeCount
  }
  if (orderType === OrderList.Beer) {
    return state.beerCount
  }
}

export const selectTotalCount = ({ orderSystem: state }: RootState) => {
  return state.totalCount
}

export const selectTotalPrice = ({ orderSystem: state }: RootState) => {
  return state.totalPrice
}

// Reducer
export const orderSystemReducer = orderSystemSlice.reducer
