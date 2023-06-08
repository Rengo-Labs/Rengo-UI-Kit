import React, { ChangeEvent } from 'react'
import { Input, InputWrapper, Text, WrapperStyled } from './styles'
import { InputType, inputTypeMap } from './types'

export interface KeyValueInputProps {
  keyText: string
  value: number
  onChange?: (value: number) => void
  inputType?: InputType,
  editable?: boolean
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
  inputType = InputType.GASFEE,
  editable = true
}: KeyValueInputProps) => {


  return (
    <WrapperStyled>
      <Text>{keyText}</Text>
        {editable &&
            <InputWrapper>
                <Input
                  value={value}
                  type='number'
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChange && onChange(Number(e.target.value))
                  }
                />
                <Text>{inputTypeMap[inputType]}</Text>
            </InputWrapper>
        }
        {
          !editable &&
          <Text>{value} {inputTypeMap[inputType]}</Text>
        }
    </WrapperStyled>
  )
}
