import React, { useEffect, useState } from 'react'
import { TextIconTouchable, ButtonWrapper } from './styles'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'

export interface WalletConnectionButtonProps {
  startIcon?: string
  endIcon?: string
  walletID: string
  isWalletActive: boolean
  onClick: () => void
}

const INITIAL_STATE = 'Connect Wallet'

/**
  A React component for a wallet connection button.
  @typedef {Object} WalletConnectionButtonProps
  @param {WalletConnectionButtonProps} props - The props of the component.
  @property {string} [startIcon] - The icon to display at the start of the button.
  @property {string} [endIcon] - The icon to display at the end of the button.
  @property {string} walletID - The ID of the wallet.
  @property {boolean} isWalletActive - Whether the wallet is currently active or not.
  @property {Function} onClick - The function to execute when the button is clicked.
*/

export const WalletConnectionButton = ({ startIcon, endIcon, walletID, isWalletActive, onClick }: WalletConnectionButtonProps) => {
  const [connectionStateText, setConnectionState] = useState(() => INITIAL_STATE)
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE

  const shortenWalletID = (walletID: string) => {
    let start = ''
    let end = ''

    if (isMobile) {
      start = walletID.slice(0, 2);
      end = walletID.slice(-3);

    
    } else {
      start = walletID.slice(0, 6);
      end = walletID.slice(-6);
    }

    return `${start}...${end}`
  }

  useEffect(() => {
    let status = ''
    if (!isMobile && !isWalletActive) {
      status = INITIAL_STATE
    } else if (isWalletActive) {
      status = shortenWalletID(walletID)
    }

    setConnectionState(status)
  }, [isMobile, isWalletActive])
  
  
  
  return (
    <ButtonWrapper
      onClick={onClick}
      isMobile={isMobile}>
        {startIcon && (
          <TextIconTouchable
            src={startIcon}
            alt={walletID} />
        )}
          <span>
            {connectionStateText}
          </span>
        {endIcon && (
          <TextIconTouchable src={endIcon} alt={walletID} />
        )}
    </ButtonWrapper>
  )
}