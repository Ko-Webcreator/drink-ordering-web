import Button from 'components/top/Button'
import styles from 'scss/pageComponents/top/buttonList.module.scss'
import React, { useEffect } from 'react'
import { useOderItems } from 'hooks/api/fetch/order-items'
import ReactLoading from 'react-loading'
import { ERROR_NO_ITEMS_MSG } from 'consts/messages/error'
import { useAppDispatch } from 'store'
import { changeIsErrorStatus } from 'store/common/errorSlice'

const ButtonList = () => {
  const { data, error, isLoading } = useOderItems()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (error) {
      dispatch(changeIsErrorStatus({ isError: true }))
    }
  }, [error])

  if (error) return null

  return (
    <div className={styles.wrap}>
      {isLoading ? (
        <ReactLoading type="spin" color="black" height="30px" width="30px" />
      ) : data?.length ? (
        data.map((e) => (
          <Button
            key={e.id}
            label={e.label}
            price={e.price}
            orderType={e.type}
          />
        ))
      ) : (
        ERROR_NO_ITEMS_MSG
      )}
    </div>
  )
}

export default ButtonList
