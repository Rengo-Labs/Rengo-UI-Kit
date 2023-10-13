import React, {useEffect, useRef} from "react";
import {SmallButtonStyled, ButtonStyled} from "./styles";
export interface ButtonProps {
    type: "small" | "large";
    props: any;
    outsideClick?: any;
    children: React.ReactNode;
}
export const Button = ({type = 'large', props = {}, outsideClick = () => {}, children}: ButtonProps) => {
    const menuBtnRef = useRef<any>();

    const handleClickOutside = (e: any) => {
        const html = e.target.innerHTML ?? ''
        const target = !html.includes('Manage')
          && !html.includes('Add')
          && !html.includes('Remove')
          && !html.includes('Swap')
          && !html.includes('Stake')
          && !html.includes('Claim')
          && !html.includes('Unstake')
        if (target) {
            outsideClick()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, []);
    
    return type === "large" ? (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    ) : (
        <SmallButtonStyled ref={menuBtnRef} {...props}>{children}</SmallButtonStyled>
    );
};
