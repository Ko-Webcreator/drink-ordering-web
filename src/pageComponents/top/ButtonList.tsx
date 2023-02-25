import Button from 'components/top/Button'
import 'scss/pageComponents/top/buttonList.scss'
import React from 'react'
import { useOderItems } from 'hooks/api/fetch/order-items'
import ReactLoading from 'react-loading'
import { ERROR_NO_ITEMS } from 'consts/messages/error'

const ButtonList = () => {
  const { data, isLoading } = useOderItems()

  return (
    <div className="buttonList">
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
        ERROR_NO_ITEMS
      )}
    </div>
  )
}

export default ButtonList
