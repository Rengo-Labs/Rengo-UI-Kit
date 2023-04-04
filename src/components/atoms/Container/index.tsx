import React from "react";
import {Grid} from "react-styled-flexboxgrid";
export interface ContainerProps {
    children: React.ReactNode;
    props?: any;
}
export const Container = ({children, props = {}}: ContainerProps) => {
    return <Grid {...props}>{children}</Grid>;
};
