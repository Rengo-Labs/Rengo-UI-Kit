import React from 'react'
import {
  Footer,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Subtitle,
  SubtitleValue,
  Title,
  Wrapper
} from './styles'
import { IHeader } from '../../molecules'
import { Divider } from '../Divider'

interface BalanceMobileItemProps {
  row: IHeader
  heightIcon: number
  widthIcon: number
}

export const BalanceMobileItem = ({ row, heightIcon, widthIcon}: BalanceMobileItemProps) => {
  const {
    crypto,
    cryptoIcon,
    mycrypto,
    '24h': h24,
    '7d': d7,
    '15d': d15,
    '30d': d30
  } = row
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>
          {cryptoIcon && <img src={cryptoIcon} alt={crypto} height={heightIcon} width={widthIcon}/>}
          <Title>{crypto}</Title>
        </HeaderTitle>
        <HeaderSubtitle>
          <Subtitle>My Crypto</Subtitle>
          <SubtitleValue>${mycrypto}</SubtitleValue>
        </HeaderSubtitle>
      </Header>
      <Divider/>
      <Footer>
        <HeaderSubtitle>
          <Subtitle>24 hr</Subtitle>
          <SubtitleValue>{h24}</SubtitleValue>
        </HeaderSubtitle>
        <HeaderSubtitle>
          <Subtitle>7 days</Subtitle>
          <SubtitleValue>{d7}</SubtitleValue>
        </HeaderSubtitle>
        <HeaderSubtitle>
          <Subtitle>15 days</Subtitle>
          <SubtitleValue>{d15}</SubtitleValue>
        </HeaderSubtitle>
        <HeaderSubtitle>
          <Subtitle>30 days</Subtitle>
          <SubtitleValue>{d30}</SubtitleValue>
        </HeaderSubtitle>
      </Footer>
    </Wrapper>
  )
}
