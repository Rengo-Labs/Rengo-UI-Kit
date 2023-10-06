import React, { ReactNode } from "react";
export interface ColumnProps {
    children: ReactNode;
    className?: string;
    props?: any;
}
export declare const Column: ({ children, className, props }: ColumnProps) => React.JSX.Element;
