import React from "react";
import {ButtonStyled} from "./styles";
export interface ButtonProps {
    props: any;
}
export const Button = ({props={}}: ButtonProps) => {
    return (
        <ButtonStyled {...props}>Button</ButtonStyled>
    );
};
