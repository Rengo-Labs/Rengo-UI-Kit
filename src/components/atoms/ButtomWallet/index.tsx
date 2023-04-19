import React, {useEffect, useState} from 'react'
import {ButtonWalletDesktop, ButtonWalletMobile, ButtonWalletText, ButtonWalletIcon} from './styles'
import walletIcon from '../../../assets/icons/wallet.svg'
import {useDeviceType} from '../../../hooks/useDeviceType'
import {DeviceType} from "../../../hooks/types";

const defaultAccountHash = 'Connect Wallet'

export interface IButtonWalletProps {
    handleClick: () => void,
    accountHashString?: string
}

const transformAccountHash = (accountHashString: string) => {
    const end = accountHashString.length;
    const start = accountHashString.length - 3;
    const wallet = `${accountHashString.substring(
        0,
        8
    )}...${accountHashString.substring(start, end)}`;
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
    const [accountHash, setAccountHash] = useState<string>(accountHashString)
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE

    useEffect(() => {
        if (accountHashString !== defaultAccountHash) {
            isMobile ?
                setAccountHash(transformAccountHash(accountHashString).walletLabelMobile) :
                setAccountHash(transformAccountHash(accountHashString).walletLabel)
        }
    }, [isMobile, accountHashString])

    return (
        isMobile ?
            <ButtonWalletMobile onClick={handleClick}>
                <ButtonWalletIcon src={walletIcon}/>
                {accountHash !== defaultAccountHash &&
                    <ButtonWalletText>
                        {accountHash !== defaultAccountHash ? accountHash : ''}
                    </ButtonWalletText>
                }
            </ButtonWalletMobile> :
            <ButtonWalletDesktop onClick={handleClick}>
                <ButtonWalletIcon src={walletIcon}/>
                <ButtonWalletText>
                    {accountHash}
                </ButtonWalletText>
            </ButtonWalletDesktop>
    )
}
