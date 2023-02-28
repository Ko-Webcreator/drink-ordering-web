import React from 'react'
import 'scss/pageComponents/common/errorDialog.scss'
import { useAppSelector } from 'store'
import { selectIsError } from 'store/common/errorSlice'

export const ErrorDialog = () => {
  const isError = useAppSelector((state) => selectIsError(state))

  return isError ? <div>ErrorDialog</div> : null
}
