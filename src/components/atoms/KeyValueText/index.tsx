import React from 'react'
import { KeyStyle, ValueStyle, WrapperStyled } from './styles';

export interface KeyValueTextProps {
  keyText: string;
  valueText: string;
}

/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the key field.
 * @param {string} valueText - The value text to display in the value field.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export const KeyValueText = ({keyText, valueText}: KeyValueTextProps) => {

  return (
    <WrapperStyled>
      <KeyStyle>{keyText}</KeyStyle>
      <ValueStyle>{valueText}</ValueStyle>
    </WrapperStyled>
  )
}
