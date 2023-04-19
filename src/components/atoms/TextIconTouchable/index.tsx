import React from 'react'
import {WrapperStyled, NameStyled} from './styles';

export interface TextIconTouchableProps {
    startIcon?: string
    name?: string
    endIcon?: string
    actionCallBack: () => void,
    background?: string,
    color?: string
    iconHeight?: number
    iconWidth?: number
}

export const TextIconTouchable = ({startIcon, name, endIcon, actionCallBack, background, color, iconHeight = 30, iconWidth = 30}: TextIconTouchableProps) => {
    return (
        <WrapperStyled background={background} onClick={() => actionCallBack()}>
            {startIcon && <img src={startIcon} height={iconHeight} width={iconWidth} alt={`${name} left icon`}/>}
            <NameStyled titleColor={color}>
                {name}
            </NameStyled>
            {endIcon && <img src={endIcon} height={iconHeight} width={iconWidth} alt={`${name} right icon`}/>}
        </WrapperStyled>
    );
}
