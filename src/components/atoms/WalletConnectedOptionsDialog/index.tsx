import React, { useState } from 'react'
import { theme } from '../../../styles/themes/themes'
import { useTheme } from "styled-components"
import { Dialog } from "../Dialog"
import { CloseButton, Container, DialogHeader, DialogHeaderContainer, DialogTitle, Row, Image, RowTitle } from "./styles"
import { Icons } from '../Icons'
import {CopiedProps, Options, Types, WalletConnectedOptionsDialogProps, } from './types'

/**
  A React component for a dialog displaying wallet-connected options.
 @typedef {Object} Options
  @property {string} id - The ID of the option.
  @property {string} key - The key of the option.
  @property {string} name - The name of the option.
  @property {string} iconName - The name of the icon to display for the option.
  @property {string} icon - The URL of the icon to display for the option.
  @property {Types} type - The type of the option.
  @property {Function} action - The function to execute when the option is selected.
  @typedef {Object} WalletConnectedOptionsDialogProps
  @property {Function} closeCallback - The function to execute when the dialog is closed.
  @property {Options[]} options - The array of options of type Options to display in the dialog.
  @param {WalletConnectedOptionsDialogProps} props - The props of the component.
  @returns {JSX.Element} - A React component that displays a dialog with wallet-connected options.
*/
export const WalletConnectedOptionsDialog = ({closeCallback, options}: WalletConnectedOptionsDialogProps) => {
  const theme = useTheme() as theme;
  const [copied, setCopied] = useState<CopiedProps>({
    id: '',
    status: false
  });

  const [hoveredItem, setHoveredItem] = useState<CopiedProps>({
    id: '',
    status: false
  })

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

  const handleOnClick = (item: Options) => {
    if (item.type === 'copy') {
      handleCopyToClipboard(item)
    } else {
      item.action(item.key)
      closeCallback()
    }
  }

  const handleCopyToClipboard = (item: Options) => {
    item.action(item.name)
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
      onClose={closeCallback}>
      <DialogHeaderContainer>
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
            onClick={() => handleOnClick(item)}
            isCopied={copied.id === item.id && item.type === Types.Copy}
            isBeingHovered={hoveredItem.id === item.id}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            isLast={i === (options.length - 1)}>

              <RowTitle
                isLast={i === (options.length - 1)}
                isCopied={copied.id === item.id && item.type === Types.Copy}
                isBeingHovered={hoveredItem.id === item.id}>
                {copied.id === item.id && item.key === 'wallet' ?
                 'Wallet number copied' :
                  item.name
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