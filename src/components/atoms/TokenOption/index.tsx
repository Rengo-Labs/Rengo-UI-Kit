import React from 'react';
import { Ellipse, TokenStyled, WrapperStyled } from './styles';

export interface TokenOptionProps {
    tokenImg: any;
    token: string;
    option1: boolean;
    onClick?: () => void;
    showColor?: boolean;
    height?: number;
    width?: number;
}

/**
 * Render a Token Tag.
 * @param {any} tokenImg - The image value to display in the img field.
 * @param {string} token - The token text to display in the token field.
 * @param {boolean} option1 - The grafic color to show in the ellipse.
 * @returns  {JSX.Element} The rendered the key-value text.
 */

export const TokenOption = ({tokenImg, token, option1, onClick, showColor = true, height=35, width=35}: TokenOptionProps) => {
    return (
        <WrapperStyled onClick={onClick}>
            <img src={tokenImg} alt={token} height={height} width={width}/>
            <TokenStyled>{token}</TokenStyled>
            {
              showColor && <Ellipse isOption1={option1}/>
            }
        </WrapperStyled>
    )
}
