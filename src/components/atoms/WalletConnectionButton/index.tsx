import React from 'react'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'
import { ButtonIcon, ButtonWrapper } from './styles'

interface WalletConnectionButtonProps {
  startIcon?: string
  endIcon?: string
  text: string
  onClick: () => void
}

export const WalletConnectionButton = ({ startIcon, endIcon, text, onClick }: WalletConnectionButtonProps) => {
  const theme = useTheme() as theme;
  return (
    <>
      <ButtonWrapper
        onClick={onClick}>
          {startIcon && (
            <ButtonIcon
              src={startIcon}
               alt={text} />
          )}

          <span>
            {text}
          </span>

          {endIcon && (
            <ButtonIcon src={endIcon} alt={text} />
          )}
      </ButtonWrapper>
    </>
  )
}