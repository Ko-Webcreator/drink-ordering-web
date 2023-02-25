import Button from 'components/top/Button'
import { ORDER_ITEMS } from 'consts/orderItems'
import 'scss/pageComponents/top/buttonList.scss'
import React from 'react'

const ButtonList = () => {
  return (
    <div className="buttonList">
      {ORDER_ITEMS.map((e) => (
        <Button key={e.id} label={e.label} price={e.price} orderType={e.type} />
      ))}
    </div>
  )
}

export default ButtonList
