import React from 'react'
import {
  Text,
  IconWrapper,
  TR,
  TD,
  CheckIcon,
  TDInnerContainer,
  TDText,
  TextLink,
  AlertIcon
} from './styles'

export interface IAccountDeployBody {
  deploy_hash?: string
  block_hash?: string
  antiquity?: string
  contract?: string
  contractRedirect: () => void
  handleCopy?: () => void
  entry_point?: string
  amount?: number
  amountSymbol?: string
  cost?: number
  price?: number
  widthIcon?: number
  heightIcon?: number
  errorMessage?: string
}

/**
 * Renders a body from deploy table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} contract - Contract of the transfer
 * @param {function} contractRedirect - Redirect to the telnet
 * @param {string} entry_point - Entry point of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} cost - Cost of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from deploy table
 */

export const AccountDeployBody = ({
  deploy_hash,
  block_hash,
  antiquity,
  contract,
  contractRedirect,
  entry_point,
  amount,
  amountSymbol,
  cost,
  price,
  widthIcon,
  heightIcon,
  errorMessage
}: IAccountDeployBody) => {
  return (
    <TR>
      <TD isFirstItem={true}>
        <IconWrapper>
          {errorMessage ? (
            <AlertIcon width={widthIcon} height={heightIcon} />
          ) : (
            <CheckIcon width={widthIcon} height={heightIcon} />
          )}

          <Text>{deploy_hash}</Text>
        </IconWrapper>
      </TD>
      <TD>
        <Text>{block_hash}</Text>
      </TD>
      <TD>
        <Text>{antiquity}</Text>
      </TD>
      <TD>
        <TDInnerContainer>
          <Text>{entry_point}</Text>
          <TextLink onClick={contractRedirect}>{contract}</TextLink>
        </TDInnerContainer>
      </TD>
      <TD>
        <Text>
          {amount} {amountSymbol}
        </Text>
      </TD>
      <TD>
        <TDInnerContainer>
          <Text>{cost} CSPR</Text>
          <TDText>${price}</TDText>
        </TDInnerContainer>
      </TD>
    </TR>
  )
}
