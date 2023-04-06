import React, { ReactNode } from 'react'
import { Wrapper } from './styles'

interface Props {
  children: ReactNode
}

export const Dialog = ({ children } : Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}