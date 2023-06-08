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
          isOpen={isOpen}
          forcePositionCenter={true}>
          <Container>
            <DialogHeaderContainer>
              <DialogHeader>
                <DialogTitle>Connect your wallet to CasperSwap</DialogTitle>
                <CloseButton onClick={closeCallback}>
                  <Icons name='X' size={23} color={theme.color.modalText} />
                </CloseButton>
              </DialogHeader>
            </DialogHeaderContainer>
            <Divider />
            <InnerContainer>
              <DialogBodyText>
                By connecting your wallet, you acknowledge that you have read,
                understand and accept the terms in the disclaimer
              </DialogBodyText>
              <WalletsContainer>
                {wallets.map((wallet) => (
                  <WalletConnectionItem wallet={wallet} key={wallet.id} />
                ))}
              </WalletsContainer>
            </InnerContainer>
            <Divider />
            <DialogFooter onClick={linkCallback}>
              New here? Get started on CasperSwap
            </DialogFooter>
          </Container>
        </Dialog>
      )}
    </>
  )
}
