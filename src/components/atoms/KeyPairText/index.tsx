import React from 'react'
import { KeyStyled, ValueStyled, WrapperStyled } from './styles'

export interface KeyPairTextProps {
    keyText: string;
    pairText: string;
    isPorcentage?: boolean;
}

/**
 * Render a key-value text.
 * @param {string} keyText - The key text to display in the key field.
 * @param {string} pairText - The value text to display in the value field.
 * @param {boolean} isPorcentage - Show the value as a percentage or $
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export const KeyPairText = ({keyText, pairText, isPorcentage}: KeyPairTextProps) => {

    return (
        <WrapperStyled >
            <KeyStyled>{keyText}</KeyStyled>
            <ValueStyled isPorcentage={isPorcentage}>{!isPorcentage && '$'}{pairText}{isPorcentage && '%'}</ValueStyled>
        </WrapperStyled>
    )
}
