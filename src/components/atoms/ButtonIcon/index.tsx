import React from 'react'
import {WrapperStyled, NameStyled} from './styles';

export interface ButtonIconProps {
    startIcon?: string
    name?: string
    endIcon?: string
    actionCallBack: () => void,
    background?: string,
    color?: string
}

export const ButtonIcon = ({startIcon, name, endIcon, actionCallBack, background, color}: ButtonIconProps) => {
    return (
        <WrapperStyled background={background} onClick={() => actionCallBack()}>
            {startIcon && <img src={startIcon} alt={`${name} left icon`}/>}
            <NameStyled titleColor={color}>
                {name}
            </NameStyled>
            {endIcon && <img src={endIcon} alt={`${name} right icon`}/>}
        </WrapperStyled>
    );
}
