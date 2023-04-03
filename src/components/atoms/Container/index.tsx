import React from "react";
import {Grid} from "react-styled-flexboxgrid";
export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    props?: any;
}
export const Container = ({children, className, props = {}}: ContainerProps) => {
    console.log("Container", props);
    return <Grid className={className} {...props}>{children}</Grid>;
};
