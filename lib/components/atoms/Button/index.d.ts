import React from "react";
export interface ButtonProps {
    type: "small" | "large";
    props: any;
    children: React.ReactNode;
}
export declare const Button: ({ type, props, children }: ButtonProps) => React.JSX.Element;
