import React from 'react'
import {Sun, Moon} from 'react-feather'
import { ToggleInput, ToggleHandle, ToggleWrapper, LabelText, SwitcherWrapper} from "./styles";
import { ToggleProps, Variant } from './types';

/**
  A toggle switch component with customizable variant and label.
  @component
  @param {Object} props - The component props.
  @param {boolean} props.isActive - The current active state of the toggle switch.
  @param {Function} props.toggle - The function to be called when the toggle switch is clicked.
  @param {Variant} [props.variant='default'] - The variant of the toggle switch. The optios are 'default', 'theme-switcher' and 'inverted-colors, if you don't pass any it will be default.
  @param {string} [props.labelText=''] - The label text to be displayed next to the toggle switch.
  @return {JSX.Element}
*/
export const Toggle = ({isActive, toggle, variant = Variant.Default, labelText }: ToggleProps) => {
  return (
    <SwitcherWrapper>
      {labelText && (
        <LabelText>{labelText}</LabelText>
      )}
      <ToggleWrapper variant={variant}>
        <ToggleInput checked={isActive} onChange={toggle} />
        <ToggleHandle isActive={isActive} variant={variant}>
          {variant === Variant.ThemeSwitcher && (
            isActive ? <Moon color="#FFFFFF" size={24}/> : <Sun color="#FFFFFF" size={24}/>
          )}
        </ToggleHandle>
      </ToggleWrapper>
    </SwitcherWrapper>
  )
}
