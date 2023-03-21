import React from 'react'
import { Wrapper, AnimatedImg } from './styles'
// @ts-ignore
import Logo from './images/Logo.svg'

export const Loader = () => {
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
