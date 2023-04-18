import React from 'react'
import {BurgerButtonStyled} from "./styles";

export interface BurguerButtonProps {
  open: boolean,
  setOpen: any
}

export const BurgerButton = ({open, setOpen}: BurguerButtonProps) => {
    return (
        <BurgerButtonStyled open={open} onClick={() => setOpen(!open)} >
            <div/>
            <div/>
            <div/>
        </BurgerButtonStyled>
    )
}
