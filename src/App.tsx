import BillBoard from 'pageComponents/top/BillBoard'
import ButtonList from 'pageComponents/top/ButtonList'
import 'scss/pages/top.scss'
import React from 'react'

const App = () => {
  return (
    <div className="wrap">
      <ButtonList />
      <BillBoard />
    </div>
  )
}

export default App
