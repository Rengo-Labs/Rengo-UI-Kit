import React, { ReactNode } from "react";
export interface RowProps {
    children: ReactNode;
    className?: string;
    props?: any;
}
export declare const Row: ({ children, className, props }: RowProps) => React.JSX.Element;
