import React from 'react'
import {
  InnerContainer,
  Wrapper,
  Title,
  Subtitle,
  H5,
  IconWrapper,
  CheckIcon,
  CopyIcon,
  SubtilteLink
} from './styles'
import { IAccountDeployBody } from '../../atoms'

export const AccountDeployMobile = ({
  deploy_hash,
  block_hash,
  antiquity,
  contract,
  contractRedirect,
  handleCopy,
  entry_point,
  amount,
  amountSymbol,
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
            <CopyIcon width={widthIcon} height={heightIcon} onClick={handleCopy}/>
          </IconWrapper>
        </IconWrapper>
      </InnerContainer>
      <InnerContainer>
        <Title>Block Hash</Title>
        <Subtitle>{block_hash}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>Amount</Title>
        <Subtitle>{amount} {amountSymbol}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>Cost</Title>
        <Subtitle>{cost} CSPR</Subtitle>
        <H5>${price}</H5>
      </InnerContainer>
      <InnerContainer>
        <Title>Contract</Title>
        <Subtitle>{entry_point}</Subtitle>
        <SubtilteLink onClick={contractRedirect}>{contract}</SubtilteLink>
      </InnerContainer>
    </Wrapper>
  )
}
