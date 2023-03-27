import React from 'react'
import { KeyStyled, ValueStyled, WrapperStyled } from './styles'

interface KeyPairTextProps {
    keyText: string;
    valueText: string;
    isPorcentage?: boolean;
}


export const KeyPairText = ({keyText, valueText, isPorcentage}: KeyPairTextProps) => {

    return (
        <WrapperStyled >
            <KeyStyled>{keyText}</KeyStyled>
            <ValueStyled isPorcentage={isPorcentage}>${valueText}</ValueStyled>
        </WrapperStyled>
    )
}