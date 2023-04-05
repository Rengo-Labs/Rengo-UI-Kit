import React, { useState } from 'react'
import { Column, Divider, KeyValueInput, KeyValueText } from '../../atoms'
import { InputType } from '../../atoms/KeyValueInput/types'
import { Wrapper } from './styles'

/**
 * Render a Liquidity Details.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export const LiquidityDetails = () => {
  const [SlippageTolerance, setSlippageTolerance] = useState<number>(0.05)
  const [NetworkGasFee, setNetworkGasFee] = useState<number>(15)

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
      <KeyValueText keyText='Base' valueText='CSPR' />
      <Divider />
      <KeyValueText keyText='Max Amount' valueText='0.016491306 WETH' />
      <Divider />
      <KeyValueText keyText='Pool Liquidity (CSPR)' valueText='351149.146168057 CSPR' />
      <Divider />
      <KeyValueText keyText='Pool Liquidity (WETH)' valueText='7.387304764 WETH' />
      <Divider />
      <KeyValueText keyText='LP supply' valueText='1610.521670542 CSPR-WETH' />
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
      <KeyValueText keyText='Route' valueText='CSPR > WETH' />
    </Wrapper>
  )
}
