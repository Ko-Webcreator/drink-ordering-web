/* eslint-disable */

import { ReactNode } from 'react'

type Props = {
  children: ReactNode | undefined
  className?: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const CustomLink = ({ href, className, children, onClick }: Props) => {
  if (href) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    )
  }
  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  )
}
