import React, { useEffect, useState } from 'react'
import {
  Text,
  IconWrapper,
  TR,
  TD,
  CheckIcon,
  TDInnerContainer,
  TDText
} from './styles'
import { useTheme } from 'styled-components'
import { theme } from '../../../styles/themes/themes'

export interface IAccountDeployBody {
  id?: number
  deploy_hash?: string
  block_hash?: string
  antiquity?: string
  contract?: string
  amount?: string
  cost?: string
  price?: string
  widthIcon?: number
  heightIcon?: number
}

/**
 * Renders a body from deploy table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} contract - Contract of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} cost - Cost of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from deploy table
 */

export const AccountDeployBody = ({
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
  const theme = useTheme() as theme
  const [currentTheme, setCurrentTheme] = useState<theme | undefined>(theme)

  useEffect(() => {
    setCurrentTheme(theme)

    return () => {
      setCurrentTheme(theme)
    }
  }, [theme])

  return (
    <TR>
      <TD isFirstItem={true}>
        <IconWrapper>
          <CheckIcon width={widthIcon} height={heightIcon} />
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
          <Text>increase_allowance with</Text>
          <Text>{contract}</Text>
        </TDInnerContainer>
      </TD>
      <TD>
        <Text>{amount}</Text>
      </TD>
      <TD>
        <TDInnerContainer>
          <Text>{cost}</Text>
          <TDText>${price}</TDText>
        </TDInnerContainer>
      </TD>
    </TR>
  )
}
