import React, {ReactNode} from "react";
import {Col} from "react-styled-flexboxgrid";

export interface ColumnProps {
    children: ReactNode;
    className?: string;
    props?: any;
}
export const Column = ({children, className, props}: ColumnProps) => {
    return <Col className={className} {...props}>{children}</Col>;
}
