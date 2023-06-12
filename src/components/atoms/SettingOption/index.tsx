import React, { ChangeEvent } from 'react'
import { WrapperStyled, Text, Input, InputWrapper } from './styles'

export interface SettingOptionProps {
  value: string
  isInput?: boolean
  handleValue: (value: string) => void
  isSelect?: boolean
}

export const SettingOption = ({
  value,
  handleValue,
  isInput = false,
  isSelect = false
}: SettingOptionProps) => {
  return (
    <WrapperStyled onClick={(e) => (!isInput ? handleValue(value) : null)} isSelect={isSelect}>
      {!isInput ? (
        <Text>{value} %</Text>
      ) : (
        <InputWrapper>
          <Input
            value={value}
            placeholder="_ _ _"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleValue(e.target.value)
            }
          />
          <Text>%</Text>
        </InputWrapper>
      )}
    </WrapperStyled>
  )
}
