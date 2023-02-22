import { RootState } from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ButtonType } from 'types/button'

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
      { payload }: PayloadAction<{ buttonType: ButtonType; price: number }>
    ) => {
      // total 処理
      state.totalCount += 1
      state.totalPrice += payload.price

      // 個別カウントを1カウントプラスする
      if (payload.buttonType === ButtonType.Coffee) {
        state.coffeeCount += 1
        return
      }
      if (payload.buttonType === ButtonType.Tea) {
        state.teaCount += 1
        return
      }
      if (payload.buttonType === ButtonType.Milk) {
        state.milkCount += 1
        return
      }
      if (payload.buttonType === ButtonType.Coke) {
        state.cokeCount += 1
        return
      }
      if (payload.buttonType === ButtonType.Beer) {
        state.beerCount += 1
        return
      }
    },
  },
})

// Actions
export const { addCountState } = orderSystemSlice.actions

// Selectors

export const selectCoffeeCount = ({ orderSystem: state }: RootState) => {
  return state.coffeeCount
}

export const selectTeaCount = ({ orderSystem: state }: RootState) => {
  return state.teaCount
}

export const selectMilkCount = ({ orderSystem: state }: RootState) => {
  return state.milkCount
}

export const selectCokeCount = ({ orderSystem: state }: RootState) => {
  return state.cokeCount
}

export const selectBeerCount = ({ orderSystem: state }: RootState) => {
  return state.beerCount
}

export const selectTotalCount = ({ orderSystem: state }: RootState) => {
  return state.totalCount
}

export const selectTotalPrice = ({ orderSystem: state }: RootState) => {
  return state.totalPrice
}

// Reducer
export const orderSystemReducer = orderSystemSlice.reducer
