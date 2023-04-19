import React from 'react'
import {IconStyled} from "./styles";
import swapIcon from '../../../assets/icons/swap-icon.svg'
export interface IButtonSwapTokenProps {
    handleClick: () => void
}
export const ButtonSwapToken = ({ handleClick }: IButtonSwapTokenProps) => {
    return <IconStyled src={swapIcon} onClick={()=>{ handleClick() }} />
}
