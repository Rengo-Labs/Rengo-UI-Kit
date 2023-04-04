import React from "react";
import {SmallButtonStyled, ButtonStyled} from "./styles";
export interface ButtonProps {
    type: "small" | "large";
    props: any;
    children: React.ReactNode;
}
export const Button = ({type = 'large', props = {}, children}: ButtonProps) => {
    return type === "large" ? (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    ) : (
        <SmallButtonStyled {...props}>{children}</SmallButtonStyled>
    );
};
