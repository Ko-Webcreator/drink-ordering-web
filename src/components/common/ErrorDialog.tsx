import { ERROR_DIALOG_MSG } from 'consts/messages/error'
import React, { useCallback } from 'react'
import styles from 'scss/components/error.module.scss'
import { useAppDispatch, useAppSelector } from 'store'
import { changeIsErrorStatus, selectIsError } from 'store/common/errorSlice'
import { CustomLink } from './CustomLink'

export const ErrorDialog = () => {
  const isError = useAppSelector((state) => selectIsError(state))
  const dispatch = useAppDispatch()

  const onClickCloseDialog = useCallback(() => {
    dispatch(changeIsErrorStatus({ isError: false }))
  }, [dispatch])

  return isError ? (
    <div className={styles.error}>
      <article>
        <h2>{ERROR_DIALOG_MSG}</h2>
        <CustomLink onClick={onClickCloseDialog}>閉じる</CustomLink>
      </article>
    </div>
  ) : null
}
