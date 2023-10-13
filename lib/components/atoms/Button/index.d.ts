import React from "react";
export interface ButtonProps {
    type: "small" | "large";
    props: any;
    outsideClick?: any;
    children: React.ReactNode;
}
export declare const Button: ({ type, props, outsideClick, children }: ButtonProps) => React.JSX.Element;
