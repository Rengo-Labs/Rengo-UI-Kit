import React from 'react'
import {WrapperStyled, NameStyled} from './styles';

export interface TextIconTouchableProps {
    startIcon?: string
    name?: string
    endIcon?: string
    actionCallBack: () => void,
    background?: string,
    color?: string
}

export const TextIconTouchable = ({startIcon, name, endIcon, actionCallBack, background, color}: TextIconTouchableProps) => {
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
