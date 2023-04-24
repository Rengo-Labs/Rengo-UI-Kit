import React, { useState } from 'react'
import { Column, Divider, KeyValueInput, KeyValueText } from '../../atoms'
import { InputType } from '../../atoms/KeyValueInput/types'
import { Wrapper } from './styles'

export interface IToken {
  amount?: string
  allowance?: string
  symbolPair?: string
  chainId: number
  contractHash: string
  decimals: number
  logoURI: string
  name: string
  packageHash: string
  symbol: string
  priceUSD?: string,
}
interface ILiquidityDetailsProps {
  firstSelectedToken: IToken;
  secondSelectedToken:IToken;
  gasFee: number;
  slippageTolerance: number;
}

/**
 * Render a Liquidity Details.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export const LiquidityDetails = ({firstSelectedToken, secondSelectedToken, gasFee, slippageTolerance}: ILiquidityDetailsProps) => {
  const [SlippageTolerance, setSlippageTolerance] = useState<number>(slippageTolerance)
  const [NetworkGasFee, setNetworkGasFee] = useState<number>(gasFee)

  const handleSlippageTolerance = (value: number) => {
    console.log('handleSlippageTolerance', value)
    setSlippageTolerance(value)
  }

  const handleNetworkGasFee = (value: number) => {
    console.log('handleNetworkGasFee', value)
    setNetworkGasFee(value)
  }

  return (
    <Wrapper props={{ xs: 12 }}>
      <KeyValueText keyText='Base' valueText={firstSelectedToken.symbol} />
      <Divider />
      <KeyValueText keyText='Max Amount' valueText={`${secondSelectedToken.amount} ${secondSelectedToken.symbol}`} />
      <Divider />
      <KeyValueText keyText={`Pool Liquidity (${firstSelectedToken.symbol})`} valueText={`${firstSelectedToken.amount} (${firstSelectedToken.symbol})`} />
      <Divider />
      <KeyValueText keyText={`Pool Liquidity (${secondSelectedToken.symbol})`} valueText={`${secondSelectedToken.amount} (${secondSelectedToken.symbol})`} />
      <Divider />
      <KeyValueText keyText='LP supply' valueText={`${firstSelectedToken.amount} ${firstSelectedToken.symbol}-${secondSelectedToken.symbol}`} />
      <Divider />
      <KeyValueInput
        keyText='Slippage Tolerance'
        value={SlippageTolerance}
        inputType={InputType.SLIPPAGETOLERANCE}
        onChange={handleSlippageTolerance}
      />
      <Divider />
      
      <KeyValueInput
        keyText='Network gas fee'
        value={NetworkGasFee}
        inputType={InputType.GASFEE}
        onChange={handleNetworkGasFee}
      />
      <Divider />
      <KeyValueText keyText='Route' valueText={`${firstSelectedToken.symbol} > ${secondSelectedToken.symbol}`} />
    </Wrapper>
  )
}
