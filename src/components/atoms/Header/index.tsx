import React from 'react'
import { TextStyle, WrapperStyle } from './styles'

interface IHeaderProps {
  text: string
  balance: string
}

export const Header = ({ text, balance }: IHeaderProps) => {
  return (
    <WrapperStyle>
      <TextStyle isTitle={true}>{text}</TextStyle>
      <TextStyle>Balance: {balance}</TextStyle>
    </WrapperStyle>
  )
}
