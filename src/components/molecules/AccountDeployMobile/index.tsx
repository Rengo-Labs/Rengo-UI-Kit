import React from 'react'
import {
  InnerContainer,
  Wrapper,
  Title,
  Subtitle,
  H5,
  IconWrapper,
  CheckIcon,
  CopyIcon
} from './styles'
import { IAccountDeployBody } from '../../atoms'
import { Icon } from '../Menu/styles'

export const AccountDeployMobile = ({
  id,
  deploy_hash,
  block_hash,
  antiquity,
  contract,
  amount,
  cost,
  price,
  widthIcon,
  heightIcon
}: IAccountDeployBody) => {
  return (
    <Wrapper>
      <InnerContainer>
        <IconWrapper>
          <Title isPrimary>Deploy Hash</Title>
          <Subtitle>{antiquity}</Subtitle>
        </IconWrapper>
        <IconWrapper>
          <CheckIcon width={widthIcon} height={heightIcon} />
          <IconWrapper>
            <Subtitle>{deploy_hash}</Subtitle>
            <CopyIcon width={widthIcon} height={heightIcon} />
          </IconWrapper>
        </IconWrapper>
      </InnerContainer>
      <InnerContainer>
        <Title>Block Hash</Title>
        <Subtitle>{block_hash}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>Amount</Title>
        <Subtitle>{amount}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>Cost</Title>
        <Subtitle>{cost}</Subtitle>
        <H5>${price}</H5>
      </InnerContainer>
      <InnerContainer>
        <Title>Contract</Title>
        <Subtitle>increase_allowance with {contract}</Subtitle>
      </InnerContainer>
    </Wrapper>
  )
}
