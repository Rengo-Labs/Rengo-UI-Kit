import React from "react";
export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    props?: any;
}
export declare const Container: ({ children, className, props }: ContainerProps) => React.JSX.Element;
