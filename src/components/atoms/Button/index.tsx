import React from "react";
export interface ButtonProps {
    props: any;
}
export const Button = ({props={}}: ButtonProps) => {
    return (
        <button {...props}>Button</button>
    );
};
