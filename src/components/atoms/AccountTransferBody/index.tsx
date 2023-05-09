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

export interface IAccountTransferBody {
  id?: number
  deploy_hash?: string
  block_hash?: string
  antiquity?: string
  of?: string
  forValue?: string
  transference_id?: string
  amount?: string
  price?: string
  widthIcon?: number
  heightIcon?: number
}

/**
 * Renders a body from transfer table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} of - Of of the transfer
 * @param {string} forValue - For of the transfer
 * @param {string} transference_id - Transference id of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from transfer table
 */

export const AccountTransferBody = ({
  id,
  deploy_hash,
  block_hash,
  antiquity,
  of,
  forValue,
  transference_id,
  amount,
  price,
  widthIcon,
  heightIcon
}: IAccountTransferBody) => {
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
        <Text>{of}</Text>
      </TD>
      <TD>
        <Text>{forValue}</Text>
      </TD>
      <TD>
        <Text>{transference_id}</Text>
      </TD>
      <TD>
        <TDInnerContainer>
          <Text>{amount}</Text>
          <TDText>${price}</TDText>
        </TDInnerContainer>
      </TD>
    </TR>
  )
}