import React from "react";
import {Grid} from "react-styled-flexboxgrid";
export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    props?: any;
}
export const Container = ({children, props = {}}: ContainerProps) => {
    return <Grid {...props}>{children}</Grid>;
};
