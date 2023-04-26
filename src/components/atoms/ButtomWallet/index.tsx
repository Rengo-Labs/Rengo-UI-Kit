import React from 'react'
import {ButtonWalletDesktop, ButtonWalletMobile, ButtonWalletText, ButtonWalletIcon} from './styles'
import walletIcon from '../../../assets/icons/wallet.svg'
import {useDeviceType} from '../../../hooks/useDeviceType'
import {DeviceType} from "../../../hooks/types";

const defaultAccountHash = 'Connect Wallet'

export interface IButtonWalletProps {
    handleClick: (() => void) | undefined,
    accountHashString?: string | null
}

const transformAccountHash = (accountHashString: string | null) => {
  if (!accountHashString) {
    return ''
  }
    const end = accountHashString.length;
    const walletLabel = `${accountHashString.substring(
        0,
        6
    )}...${accountHashString.substring(end - 11, end)}`;

    const walletLabelMobile = `${accountHashString.substring(
        0,
        2
    )}...${accountHashString.substring(end - 3, end)}`;

    return {walletLabel, walletLabelMobile}
}
export const ButtonWallet = ({handleClick, accountHashString = defaultAccountHash}: IButtonWalletProps) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
    
  const walletHashTransformed = transformAccountHash(accountHashString)
  const walletIsActive = accountHashString && walletHashTransformed !== ''
    
  return (
      <>
        {isMobile ? (
          <ButtonWalletMobile onClick={handleClick}>
          <ButtonWalletIcon src={walletIcon}/>
            <ButtonWalletText>
              {walletIsActive ? walletHashTransformed?.walletLabelMobile : defaultAccountHash}
            </ButtonWalletText>
          
      </ButtonWalletMobile>
        ) : (
          <ButtonWalletDesktop onClick={handleClick}>
            <ButtonWalletIcon src={walletIcon}/>
            <ButtonWalletText>
              {walletIsActive ? walletHashTransformed.walletLabelMobile : defaultAccountHash}
            </ButtonWalletText>
          </ButtonWalletDesktop>
        )}
      </>
    )
}
