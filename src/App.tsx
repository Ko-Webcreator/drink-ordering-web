import BillBoard from 'pageComponents/top/BillBoard'
import ButtonList from 'pageComponents/top/ButtonList'
import styles from 'scss/pages/top.module.scss'
import React from 'react'

const App = () => {
  return (
    <div className={styles.wrap}>
      <ButtonList />
      <BillBoard />
    </div>
  )
}

export default App
