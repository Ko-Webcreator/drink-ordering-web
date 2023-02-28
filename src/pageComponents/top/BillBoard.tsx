import React from 'react'
import styles from 'scss/pageComponents/top/billBoard.module.scss'
import { useAppSelector } from 'store'
import { selectTotalCount, selectTotalPrice } from 'store/top/orderSystemSlice'

const BillBoard = () => {
  const count = useAppSelector((state) => selectTotalCount(state))
  const price = useAppSelector((state) => selectTotalPrice(state))

  return (
    <dl className={styles.wrap}>
      <dt>お会計</dt>
      <dd>商品数 : {count}個</dd>
      <dd>合計金額 : {price}円</dd>
    </dl>
  )
}

export default BillBoard
