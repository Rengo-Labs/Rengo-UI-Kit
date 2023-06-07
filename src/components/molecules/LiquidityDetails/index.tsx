import React from 'react'
import { Divider, KeyValueInput, KeyValueText } from '../../atoms'
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
export interface ILiquidityDetailsProps {
  firstSymbol: string,
  secondSymbol: string,
  baseAmount: string | number,
  minAmount: string | number,
  firstTotalLiquidity: string | number,
  secondTotalLiquidity: string | number,
  totalSupply: string | number,
  slippage: number,
  setSlippage: (value: number) => void,
  networkFee: number,
  setNetworkFee: (value: number) => void
}

/**
 * Render a Liquidity Details.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export const LiquidityDetails = ({firstSymbol, secondSymbol, baseAmount, minAmount, firstTotalLiquidity, secondTotalLiquidity, totalSupply, slippage, setSlippage, networkFee, setNetworkFee}: ILiquidityDetailsProps) => {

  const handleSlippageTolerance = (value: number) => {
    setSlippage(value)
  }

  const handleNetworkGasFee = (value: number) => {
    setNetworkFee(value)
  }

  const handleNullOrUndefined = (value: string | number | undefined) => {
    if (value === undefined || value === null || value === '') {
      return 0
    }
    return value
  }

  return (
    <Wrapper props={{ xs: 12 }}>
      <KeyValueText keyText='Min Amount' valueText={`${baseAmount} ${firstSymbol}`} />
      <Divider />
      <KeyValueText keyText='Min Token Amount' valueText={`${minAmount} ${secondSymbol}`} />
      <Divider />
      <KeyValueText keyText={`Pool Liquidity (${firstSymbol})`} valueText={`${firstTotalLiquidity} ${firstSymbol}`} />
      <Divider />
      <KeyValueText keyText={`Pool Liquidity (${secondSymbol})`} valueText={`${secondTotalLiquidity} ${secondSymbol}`} />
      <Divider />
      <KeyValueText keyText='LP supply' valueText={`${handleNullOrUndefined(totalSupply)} ${firstSymbol}-${secondSymbol}`} />
      <Divider />
      <KeyValueInput
        keyText='Slippage Tolerance'
        value={slippage}
        inputType={InputType.SLIPPAGETOLERANCE}
        onChange={handleSlippageTolerance}
      />
      <Divider />

      <KeyValueInput
        keyText='Network gas fee'
        value={networkFee}
        inputType={InputType.GASFEE}
        onChange={handleNetworkGasFee}
      />
      <Divider />
      <KeyValueText keyText='Route' valueText={`${firstSymbol} > ${secondSymbol}`} />
    </Wrapper>
  )
}
