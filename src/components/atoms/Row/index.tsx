import React, {ReactNode} from "react";
import {Row as RowContainer} from "react-styled-flexboxgrid";

export interface RowProps {
    children: ReactNode;
    props?: any;
}

export const Row = ({children, props = {}}: RowProps) => {
    return <RowContainer {...props}>{children}</RowContainer>;
}
