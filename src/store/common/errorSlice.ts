import { RootState } from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  isError: boolean
}

const initialState: State = {
  isError: false,
}

const errorStatusSlice = createSlice({
  name: 'errorStatusSlice',
  initialState,
  reducers: {
    changeIsErrorStatus: (
      state,
      { payload }: PayloadAction<{ isError: boolean }>
    ) => {
      state.isError = payload.isError
    },
  },
})

// Actions
export const { changeIsErrorStatus } = errorStatusSlice.actions

// Selectors
export const selectIsError = ({ errorStatus: state }: RootState) =>
  state.isError

// Reducer
export const errorStatusReducer = errorStatusSlice.reducer
