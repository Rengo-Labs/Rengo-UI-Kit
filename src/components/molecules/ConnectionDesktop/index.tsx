import React from 'react'
import { Dialog, Divider, Icons, WalletConnectionItem } from '../../atoms'
import {
  CloseButton,
  Container,
  DialogBodyText,
  DialogFooter,
  DialogHeader,
  DialogHeaderContainer,
  DialogTitle,
  InnerContainer,
  WalletsContainer
} from './styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'
import { ConnectionPopupProps } from '../WalletConnection/types'

export const ConnectionDesktop = ({
  closeCallback,
  linkCallback,
  wallets,
  isOpen
}: ConnectionPopupProps) => {
  const theme = useTheme() as theme

  return (
    <>
      {isOpen && (
        <Dialog
          onClose={closeCallback}
          isOpen={isOpen}>
          <Container>
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
          </Container>
        </Dialog>
      )}
    </>
  )
}
