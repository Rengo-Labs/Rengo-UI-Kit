import React, { useState } from 'react'
import { theme } from '../../../styles/themes/themes'
import { useTheme } from "styled-components"
import { Dialog } from "../Dialog"
import { CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, Row, Image, RowTitle } from "./styles"
import { Icons } from '../Icons'
import {CopiedProps, Options, Types, WalletConnectedOptionsDialogProps, } from './types'
import { useDeviceType } from '../../../hooks/useDeviceType'
import { DeviceType } from '../../../hooks/types'

/**
  A React component for a dialog displaying wallet-connected options.
 @typedef {Object} Options
  @property {string} id - The ID of the option.
  @property {string} key - The key of the option.
  @property {string} name - The name of the option.
  @property {string} iconName - The name of the icon to display for the option.
  @property {string} icon - The URL of the icon to display for the option.
  @property {Types} type - The type of the option.
  @typedef {Object} WalletConnectedOptionsDialogProps
  @property {Function} closeCallback - The function to execute when the dialog is closed.
  @property {Options[]} options - The array of options of type Options to display in the dialog.
  @param {WalletConnectedOptionsDialogProps} props - The props of the component.
  @returns {JSX.Element} - A React component that displays a dialog with wallet-connected options.
*/

export const WalletConnectedOptionsDialog = ({closeCallback, options, isOpen}: WalletConnectedOptionsDialogProps) => {
  const theme = useTheme() as theme;
  const deviceType = useDeviceType()
  const isMobile = deviceType === DeviceType.MOBILE
  const [copied, setCopied] = useState<CopiedProps>({
    id: '',
    status: false
  });

  const [hoveredItem, setHoveredItem] = useState<CopiedProps>({
    id: '',
    status: false
  })

  const transformAccountHash = (accountHashString: string | null) => {
    if (!accountHashString) {
      return ''
    }
    const end = accountHashString.length;
    const walletLabel = `${accountHashString.substring(
        0,
        6
    )}...${accountHashString.substring(end - 11, end)}`;

    return walletLabel;
  }

  const handleMouseEnter = (item: Options) => {
    setHoveredItem({
      id: item.id,
      status: true
    })
  }

  const handleMouseLeave = () => {
    setHoveredItem({
      id: '',
      status: false
    })
  }

  const getCurrentIconColor = (item: Options) => {
    if (hoveredItem.id === item.id ||
      copied.id === item.id && item.type === Types.Copy) {
      return theme.background.wallet.white
    }

   return  theme.color.modalText
  }

  const handleOnClick = ( item: Options) => {
    if (item.type === Types.Copy) {
      handleCopyToClipboard(item)
    } else {
      item.onClick && item.onClick()
      closeCallback()
    }
  }

  const handleCopyToClipboard = (item: Options) => {
    navigator.clipboard.writeText(item.name)

    setCopied({
      id: item.id,
      status: true
    });

    setTimeout(() => setCopied({
      id: '',
      status: false
    }), 2000);
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={closeCallback}
      forcePositionCenter={true}>
      <DialogHeaderContainer isMobile={isMobile}>
        <DialogHeader>
          <DialogTitle>Wallet Connected</DialogTitle>
          <CloseButton onClick={closeCallback}>
            <Icons name='X' size={23} color={theme.color.modalText} />
          </CloseButton>
        </DialogHeader>
      </DialogHeaderContainer>

      <Container>
        {options && options.map((item, i) => (
          <Row
            key={`wallet-option-item-${item.id}`}
            onClick={() => handleOnClick( item)}
            isCopied={copied.id === item.id && item.type === Types.Copy}
            isBeingHovered={hoveredItem.id === item.id}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            isLast={i === (options.length - 1)}
            isMobile={isMobile}>

              <RowTitle
                isLast={i === (options.length - 1)}
                isCopied={copied.id === item.id && item.type === Types.Copy}
                isBeingHovered={hoveredItem.id === item.id}>
                {copied.id === item.id && item.key === 'wallet' ?
                 'Wallet number copied' :
                  item.key == 'wallet' ? transformAccountHash(item.name) : item.name
                }
              </RowTitle>

              {item.icon && (
                <Image
                src={item.icon}
                isLast={i === (options.length - 1)}
                isBeingHovered={hoveredItem.id === item.id} />
              )}

              <Icons
                name={item.iconName}
                color={getCurrentIconColor(item)}
                fill='transparent'
                size={24} />
          </Row>
        ))}
      </Container>
    </Dialog>
  )
}
