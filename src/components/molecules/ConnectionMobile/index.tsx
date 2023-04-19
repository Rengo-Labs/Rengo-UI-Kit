import React, { useState } from 'react'
import {
  CloseButton,
  Container,
  Content,
  DialogBodyText,
  DialogFooter,
  DialogHeader,
  DialogHeaderContainer,
  DialogTitle,
  InnerContainer,
  WalletsContainer
} from './styles'
import { Divider, Icons, WalletConnectionItem } from '../../atoms'
import { ConnectionPopupProps } from '../WalletConnection/types'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'

export const ConnectionMobile = ({
  closeCallback,
  linkCallback,
  wallets,
  isOpen
}: ConnectionPopupProps) => {
  const theme = useTheme() as theme

  return (
    <Container isOpen={isOpen}>
      <Content>
        <DialogHeaderContainer>
          <DialogHeader>
            <DialogTitle>Connect your wallet to casperswap</DialogTitle>
            <CloseButton onClick={closeCallback}>
              <Icons name='X' size={23} color={theme.color.modalText} />
            </CloseButton>
          </DialogHeader>
        </DialogHeaderContainer>
        <Divider />
        <InnerContainer>
          <DialogBodyText>
            By connecting your wallet, you acknowledge that you have read,
            understand and accept the terms in the Disclaimer
          </DialogBodyText>
          <WalletsContainer>
            {wallets.map((wallet) => (
              <WalletConnectionItem wallet={wallet} key={wallet.id} />
            ))}
          </WalletsContainer>
        </InnerContainer>
        <Divider />
        <DialogFooter onClick={linkCallback}>
          New here? Get started on Casperswap
        </DialogFooter>
      </Content>
    </Container>
  )
}
