import React from "react";
import { ContainerProps } from "../Container";
export interface IContainerLayoutProps extends ContainerProps {
    children: React.ReactNode;
}
export declare const ContainerLayout: ({ children, props, className }: IContainerLayoutProps) => JSX.Element;
