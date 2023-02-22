import React from 'react'
import 'scss/pageComponents/top/billBoard.scss'

const BillBoard = () => {
  return (
    <dl className="billBoard-wrap">
      <dt>お会計</dt>
      <dd>商品数 : 0円</dd>
      <dd>合計金額 : 0円</dd>
    </dl>
  )
}

export default BillBoard
