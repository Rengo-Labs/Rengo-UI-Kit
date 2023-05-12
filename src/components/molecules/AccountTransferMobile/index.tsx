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
import { IAccountDeployBody, IAccountTransferBody } from '../../atoms'
import { Icon } from '../Menu/styles'

export const AccountTransferMobile = ({
  deploy_hash,
  block_hash,
  antiquity,
  of,
  forValue,
  transference_id,
  amount,
  price,
  widthIcon,
  heightIcon,
  handleCopy
}: IAccountTransferBody) => {
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
        <Title>Of</Title>
        <Subtitle>{of}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>For</Title>
        <Subtitle>{forValue}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>Transference Id</Title>
        <Subtitle>{transference_id}</Subtitle>
      </InnerContainer>
      <InnerContainer>
        <Title>Cost</Title>
        <Subtitle>{amount} CSPR</Subtitle>
        <H5>${price}</H5>
      </InnerContainer>
    </Wrapper>
  )
}
