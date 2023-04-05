import React, { useState } from 'react'
import { Column, Divider, KeyValueInput, KeyValueText } from '../../atoms'
import { Wrapper } from './styles'
import { InputType } from '../../atoms/KeyValueInput/types'

/**
 * Render a More info component.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export const SwapMoreInfo = () => {
  const [SlippageTolerance, setSlippageTolerance] = useState<number>(0.05)
  const [NetworkGasFee, setNetworkGasFee] = useState<number>(15)

  const handleSlippageTolerance = (value: number) => {
    setSlippageTolerance(value)
  }

  const handleNetworkGasFee = (value: number) => {
    setNetworkGasFee(value)
  }

  return (
    <Column props={{ xs: 12 }}>
      <Wrapper>
        <KeyValueText keyText='Swapping Through' valueText='CasperSwap Pool' />
        <Divider/>
        <KeyValueText keyText='Minimum received' valueText='0.00052240 WETH' />
        <Divider/>
        <KeyValueText keyText='Low Price Impact' valueText='<0.01 %' />
        <Divider/>
        <KeyValueInput
          keyText='Slippage Tolerance'
          value={SlippageTolerance}
          inputType={InputType.SLIPPAGETOLERANCE}
          onChange={handleSlippageTolerance}
        />
        <Divider/>
        <KeyValueText keyText='Swapp Fee' valueText='0.03 CSPR' />
        <Divider/>
        <KeyValueInput
          keyText='Network gas fee'
          value={NetworkGasFee}
          inputType={InputType.GASFEE}
          onChange={handleNetworkGasFee}
        />
        <Divider/>
        <KeyValueText keyText='Route' valueText='CSPR > WETH' />
      </Wrapper>
    </Column>
  )
}
