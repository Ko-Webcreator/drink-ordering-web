import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { orderSystemReducer } from 'store/top/orderSystemSlice'

const appReducer = combineReducers({
  orderSystem: orderSystemReducer,
})

const rootReducer: typeof appReducer = (state, action) => {
  return appReducer(state, action)
}
export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
