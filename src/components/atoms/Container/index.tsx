import React from "react";
import {Grid} from "react-styled-flexboxgrid";
export interface Props {
    children: React.ReactNode;
    props?: any;
}
export const Container = ({children, props = {}}: Props) => {
    console.log("Container", props);
    return <Grid {...props}>{children}</Grid>;
};
