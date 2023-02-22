import React from 'react'
import 'scss/pageComponents/top/billBoard.scss'
import { useAppSelector } from 'store'
import { selectTotalCount, selectTotalPrice } from 'store/top/orderSystemSlice'

const BillBoard = () => {
  const count = useAppSelector((state) => selectTotalCount(state))
  const price = useAppSelector((state) => selectTotalPrice(state))

  return (
    <dl className="billBoard-wrap">
      <dt>お会計</dt>
      <dd>商品数 : {count}個</dd>
      <dd>合計金額 : {price}円</dd>
    </dl>
  )
}

export default BillBoard
