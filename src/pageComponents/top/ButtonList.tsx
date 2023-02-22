import Button from 'components/top/Button'
import { buttonLinks } from 'consts/buttonLinks'
import 'scss/pageComponents/top/buttonList.scss'
import React from 'react'

const ButtonList = () => {
  return (
    <div className="buttonList">
      {buttonLinks.map((e) => (
        <Button key={e.id} label={e.label} price={e.price} orderType={e.type} />
      ))}
    </div>
  )
}

export default ButtonList
