import React, { ChangeEvent } from 'react'
import { Input, InputWrapper, Text, WrapperStyled } from './styles'
import { InputType, inputTypeMap } from './types'

interface KeyValueInputProps {
  keyText: string
  value: number
  onChange?: (value: string) => void
  inputType?: InputType
}

/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the input field.
 * @param {number} value - The value text to display in the input field.
 * @param {function} onChange - The function to call when the input value changes.
 * @param {InputType} inputType - The type of input to display.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export const KeyValueInput = ({
  keyText,
  value,
  onChange,
  inputType = InputType.GASFEE
}: KeyValueInputProps) => {
  

  return (
    <WrapperStyled>
      <Text>{keyText}</Text>
      <InputWrapper>
        <Input
          type='text'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(e.target.value)
          }
        />
        
        <Text>{inputTypeMap[inputType]}</Text>
        
      </InputWrapper>
    </WrapperStyled>
  )
}
