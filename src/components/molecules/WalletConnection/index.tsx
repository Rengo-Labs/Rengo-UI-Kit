import React from 'react'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'
import { ConnectionPopupProps } from './types'
import { ConnectionDesktop } from '../ConnectionDesktop'
import { ConnectionMobile } from '../ConnectionMobile'

export const WalletConnection = ({
  closeCallback,
  linkCallback,
  wallets,
  isOpen = false
}: ConnectionPopupProps) => {
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE

  return (
    <>
      {isMobile ? (
        <ConnectionMobile
          closeCallback={closeCallback}
          wallets={wallets}
          linkCallback={linkCallback}
          isOpen={isOpen}
        />
      ) : (
        <ConnectionDesktop
          closeCallback={closeCallback}
          wallets={wallets}
          linkCallback={linkCallback}
          isOpen={isOpen}
        />
      )}
    </>
  )
}
