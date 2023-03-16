import React from "react";
interface Props {
    props: any;
}
export const Button = (props: Props) => {
    return (
        <button {...props}>Button</button>
    );
};
