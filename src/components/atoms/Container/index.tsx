import React from "react";
import {Grid} from "react-styled-flexboxgrid";
export interface ContainerProps {
    children: React.ReactNode;
    props?: any;
}
export const Container = ({children, props = {}}: ContainerProps) => {
    console.log("Container", props);
    return <Grid {...props}>{children}</Grid>;
};
