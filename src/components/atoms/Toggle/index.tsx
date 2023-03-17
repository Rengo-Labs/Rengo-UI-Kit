import React from 'react'
import {Sun, Moon} from 'react-feather'
import {IconWrapper, StyledToggle} from "./styles";

export interface ToggleProps {
    isActive: boolean
    toggle: () => void
}
export const Toggle = ({isActive, toggle}: ToggleProps) => {
    return (
        <StyledToggle onClick={toggle}>
            <span>
                <IconWrapper isActive={!isActive}>
                 <Sun size={20}/>
                </IconWrapper>
             </span>
            <span style={{padding: '0 .5rem'}}>{' / '}</span>
            <span>
                <IconWrapper isActive={isActive}>
                    <Moon size={20}/>
                </IconWrapper>
          </span>
        </StyledToggle>
    )
}
