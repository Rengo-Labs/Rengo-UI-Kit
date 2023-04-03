import React from 'react'
import { Wrapper, AnimatedImg } from './styles'
// @ts-ignore
import Logo from './images/Logo.svg'
export interface LoaderProps {
    children: React.ReactNode;
    props?: any;
}
export const Loader = ({children, props} : LoaderProps) => {
    return (
        <>
            <Wrapper>
                <AnimatedImg>
                    <img src={Logo} alt="Logo" />
                </AnimatedImg>
            </Wrapper>
        </>
    )
}
