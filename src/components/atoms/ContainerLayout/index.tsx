import React from "react";
import {WrapperContainer} from "./styles";
import {ContainerProps} from "../Container";

export interface IContainerLayoutProps extends ContainerProps {
    children: React.ReactNode;
}
export const ContainerLayout = ({children, props, className}: IContainerLayoutProps) => {
    return (
        <WrapperContainer props={props} className={className}>
            {children}
        </WrapperContainer>
    )
}
