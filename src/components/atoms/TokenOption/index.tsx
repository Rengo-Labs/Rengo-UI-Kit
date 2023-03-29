import React from 'react';
import { Ellipse, TokenStyled, WrapperStyled } from './styles';

interface TokenOptionProps {
    tokenImg: any;
    token: string;
    option1: boolean;
}

export const TokenOption = ({tokenImg, token, option1}: TokenOptionProps) => {
    return (
        <WrapperStyled>
            <img src={tokenImg} alt={token}/>
            <TokenStyled>{token}</TokenStyled>
            <Ellipse isOption1={option1}/>
        </WrapperStyled>
    )
}