import React, { useState, ChangeEvent } from 'react'
import {WrapperStyled, Text, Input, InputWrapper, InputWrapperContainer} from './styles'

export interface SettingOptionButtonProps {
  value: string
  isInput?: boolean
  handleValue: () => void
  isSelect?: boolean
}

export const SettingOptionButton = ({
  value,
  handleValue,
  isSelect = false
}: SettingOptionButtonProps) => {
  return (
      <>
        <WrapperStyled onClick={handleValue} isSelect={isSelect}>
          <Text>{value}</Text>
        </WrapperStyled>
      </>
  )
}
