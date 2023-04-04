import { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Variant } from "./types";
interface Props {
  isActive?: boolean
  Icon?: ReactElement
  variant?: Variant
}

export const ToggleWrapper = styled.label<Props>`
  position: relative;
  display: inline-block;
  width: ${({ variant }) => variant === Variant.ThemeSwitcher ? '65px;' : '37px' };
  height: ${({ variant }) => variant === Variant.ThemeSwitcher ? '30px;' : '22px' };

  ${({ theme, variant }) => css`
    background: ${() => {
      if (variant === Variant.InvertedColors) {
        return `${theme.color.primary.default};`;
      }

      if (variant === Variant.ThemeSwitcher) {
        return `${theme.color.toggleButton.default};`;
      }

      return `${theme.border.veryLightPurple};`;
    }}
  `}

  ${({ theme, variant }) => css`
    border: ${() => {
      if (variant === Variant.Default) {
        return `1px solid ${theme.color.primary.default};`;
      }
      return ';';
    }}
  `}
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 46.4286px;
`;

export const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const ToggleHandle = styled.span<Props>`
  position: absolute;
  margin: ${({ variant }) => {
    if (variant === Variant.ThemeSwitcher) {
      return '2.93px auto;'
    }

    if (variant === Variant.InvertedColors) {
      return '2.3px auto;'
    }

    return '1.4px auto;'
  }};
  left: ${({ variant }) => variant === Variant.ThemeSwitcher ? '4px;' : '2px;'};
  width: ${({ variant }) => variant === Variant.ThemeSwitcher ? '24px;' : '18px' };
  height: ${({ variant }) => variant === Variant.ThemeSwitcher ? '24px;' : '18px' };
  background-color: ${({ theme, variant }) => {
    if (variant === Variant.Default) {
      return theme.color.white;
    }

    if (variant === Variant.InvertedColors) {
      return theme.color.toggleButton.default;
    }

    return theme.color.primary.default
  }};
  transition: transform 0.2s ease-in-out;
  transform: ${({ isActive, variant }) => {
    if (variant === Variant.ThemeSwitcher) {
      if (isActive) {
        return 'translateX(33px);';
      } else {
        return 'translateX(0px);'
      }
    } 
    if (variant === Variant.InvertedColors) {
      if (isActive) {
        return 'translateX(15px);';
      } else {
        return 'translateX(0px);';
      }
    }
    else {
      if (isActive) {
        return 'translateX(13px);';
      } else {
        return 'translateX(0px);';
      }
    }

  }};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4.42857px;
  border-radius: 28.7415px;
  gap: 5.75px;
`;


export const ToggleButton = styled.button<Props>`
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
  border: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

export const LabelText = styled.span`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-size: 18px;
  line-height: 26px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.modalText};
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;