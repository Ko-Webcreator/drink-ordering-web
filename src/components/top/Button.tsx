import { CustomLink } from 'components/common/CustomLink'
import React, { useCallback } from 'react'
import 'scss/components/top/button.scss'
import { useAppDispatch, useAppSelector } from 'store'
import { addCountState, selectOrderCount } from 'store/top/orderSystemSlice'
import { OrderType } from 'types/order'

type Props = {
  label: string
  price: number
  orderType: OrderType
}

const Button = ({ label, price, orderType }: Props) => {
  const dispatch = useAppDispatch()

  const onClickButton = useCallback(() => {
    // お会計に反映する
    dispatch(addCountState({ orderType, price }))
  }, [orderType, price])

  const count = useAppSelector((state) => selectOrderCount(state, orderType))

  return (
    <CustomLink onClick={onClickButton} className="button">
      <span>{label}</span>
      <span>{price}円</span>
      <span className="number">{count}</span>
    </CustomLink>
  )
}

export default Button
