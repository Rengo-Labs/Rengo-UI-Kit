import React, {ReactNode} from "react";
import {Row as RowContainer} from "react-styled-flexboxgrid";

export interface RowProps {
    children: ReactNode;
    className?: string;
    props?: any;
}

export const Row = ({children, className, props = {}}: RowProps) => {
    return <RowContainer className={className} {...props}>{children}</RowContainer>;
}
