import React, {useEffect, useState} from 'react'
import {ButtonWalletDesktop, ButtonWalletMobile, ButtonWalletText, ButtonWalletIcon} from './styles'
import walletIcon from '../../../assets/icons/wallet.svg'
import {useDeviceType} from '../../../hooks/useDeviceType'
import {DeviceType} from "../../../hooks/types";

const defaultAccountHash = 'Connect Wallet'

export interface IButtonWalletProps {
    handleClick: () => void,
    accountHashString?: any
}

const transformAccountHash = (accountHashString: string) => {
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
    const [accountHash, setAccountHash] = useState<any>(accountHashString)
    const deviceType = useDeviceType()
    const isMobile = deviceType === DeviceType.MOBILE
    console.log(' $$$$$ accountHash $$$$', accountHash)

    useEffect(() => {
        console.log(' ##### accountHash #####', accountHash)
        if (accountHash && accountHash !== defaultAccountHash && accountHash.length) {
            console.log(' &&&& accountHash &&&&', accountHash)
            isMobile ?
                setAccountHash(transformAccountHash(accountHash).walletLabelMobile) :
                setAccountHash(transformAccountHash(accountHash).walletLabel)
        }
        if(accountHash === null) {
            console.log(' @@@@@ accountHash @@@', accountHash)
            setAccountHash(defaultAccountHash)
        }
    }, [isMobile, accountHashString])

    return (
        isMobile ?
            <ButtonWalletMobile onClick={handleClick}>
                <ButtonWalletIcon src={walletIcon}/>
                {accountHash !== null && accountHash !== defaultAccountHash &&
                    <ButtonWalletText>
                        {accountHash}
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
