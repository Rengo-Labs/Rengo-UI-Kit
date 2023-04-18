import React from 'react'
import { Wallet } from '../../molecules/WalletConnection/types'
import { Container, Icon, Text } from './styles'

interface WalletConnectionProps {
  wallet: Wallet
}

export const WalletConnectionItem = ({wallet}: WalletConnectionProps) => {
  return (
    <Container>
         <Icon src={wallet.icon} alt={wallet.name} sizes='14' />
         <Text>{wallet.name}</Text>
    </Container>
  )
}