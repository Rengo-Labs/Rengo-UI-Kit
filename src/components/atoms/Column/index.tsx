import React, {ReactNode} from "react";
import {Col} from "react-styled-flexboxgrid";

export interface ColumnProps {
    children: ReactNode;
    props?: any;
}
export const Column = ({children, props}: ColumnProps) => {
    return <Col {...props}>{children}</Col>;
}
