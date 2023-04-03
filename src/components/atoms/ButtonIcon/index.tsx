import React from 'react'
import {WrapperStyled, NameStyled} from './styles';

export interface ButtonIconProps {
    startIcon?: string
    name?: string
    endIcon?: string
    actionCallBack: () => void
}

export const ButtonIcon = ({startIcon, name, endIcon, actionCallBack}: ButtonIconProps) => {
    return (
        <WrapperStyled onClick={() => actionCallBack()}>
            {startIcon && <img src={startIcon} alt={`${name} left icon`}/>}
            <NameStyled>
                {name}
            </NameStyled>
            {endIcon && <img src={endIcon} alt={`${name} right icon`}/>}
        </WrapperStyled>
    );
}
