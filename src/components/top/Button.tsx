import { CustomLink } from 'components/common/CustomLink'
import React, { useCallback } from 'react'
import 'scss/components/top/button.scss'

type Props = {
  id: number
  label: string
  price: number
}

const Button = ({ id, label, price }: Props) => {
  const onClickButton = useCallback(() => {
    // お会計に反映する
  }, [id])

  return (
    <CustomLink onClick={onClickButton} className="button">
      <span>{label}</span>
      <span>{price}円</span>
      <span className="number">0</span>
    </CustomLink>
  )
}

export default Button
