import styled, { css } from "styled-components";
import { IconSize, Status, Type, TYPES_WITH_ICON } from "./types";

interface Props {
  status?: Status,
  type?: Type
  iconSize?: IconSize;
}


export const InputWrapper = styled.div`
  width: 100%;
  postion: relative !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 4px;
`;

export const InputInnerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const LabelStyled = styled.label<Props>`
  display: block;
  position: relative;
  width: 100%;
  color: ${({status, theme}) => {
    const { color } = theme
    
    if (status === Status.Error) {
      return color.error.default
    }

    if (status === Status.Success) {
      return color.success.default
    }

    return color.primary.default
  }};

  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
`;

export const HelperText = styled.span<Props>`
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({status, theme}) => {
    const { color} = theme

    if (status === Status.Error) {
      return color.error.default
    }

    if (status === Status.Success) {
      return color.success.default
    }
    
    return color.grey
  }}
`;

export const InputStyled = styled.input<Props>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;
  height: 50px;
  background: ${({ theme }) => theme.background.default};
  border-radius: 50px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  font-family: ${({theme}) => theme.typography.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${({ theme}) =>theme.color.default};

  ::placeholder {
    color: ${({ theme}) =>theme.color.default};
  }

  @media (min-width: 800px) {
    ${({ theme }) => css`
      background-color: ${theme.background.searchInput};
    `}
    ${({ theme }) => css`
      color: ${theme.color.default};
    `}
  }

  color: ${({status, theme}) => {
    const { color } = theme

    if (status === Status.Error) {
      return color.error.default
    }

    return color.default
  }};
  border: ${({status, theme}) => {
    const { color } = theme

    if (status === Status.Error) {
      return `1px solid ${color.error.default};`
    }

    if (status === Status.Success) {
      return `1px solid ${color.success.default};`
    }
    
    return `1px solid${color.lavender};`
  }}

  ${({ type, iconSize }) => { 
      if (!type || !iconSize) {
        return 0
      }
      
      if (TYPES_WITH_ICON.includes(type)) {
        return css`
        padding-left: calc(1em + ${() => {
            if(iconSize === IconSize.Large) {
              return "110px"
            }
            return "48px"
          }
        });
      `}
    }
  }

  &:focus {
    outline: none;
    border: ${({ status, theme }) => {
      const { border } = theme

      if (status === Status.Error) {
        return `2px solid ${border.redCinnabar}`
      }

      if (status === Status.Success) {
        return `2px solid ${border.greenMalachite}`
      }

      return `2px solid ${border.veryLightPurple}`
    }}
  }

  &:active {
    border: none;
    outline: ${({ status, theme }) => {
      const { border } = theme

      if (status === Status.Error) {
        return `2px solid ${border.red}`
      }

      if (status === Status.Success) {
        return `2px solid ${border.green}`
      }

      return `2px solid ${border.lightBlue}`
    }}
  }


  &:hover {
    border: ${({ status, theme }) => {
      const { border } = theme

      if (status === Status.Error) {
        return `2px solid ${border.redValencia}`
      }

      if (status === Status.Success) {
        return `2px solid ${border.greenMantis}`
      }

      return `2px solid ${border.darkLilac}`
    }}
  }
  &:active:hover {
    border: none;
  }
`;

export const IconWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 8px;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: ${({ iconSize }) => iconSize === IconSize.Small ? '32px;' : 'auto;' }
  width: ${({ iconSize }) => iconSize === IconSize.Small ? '32px;' : 'auto;' }
  border-radius: 60px;

  @media (min-width: 430px) {
    margin: auto 16px;
  }


  

  background: ${({status, theme, iconSize}) => {
    const { background } = theme
    
    if (iconSize === IconSize.Large) {
      return 'none'
    }
    if (status === Status.Error) {
      return background.palePink
    }

    if (status === Status.Success) {
      return background.teaGreen
    }

    return background.lightGray
  }}
`;
