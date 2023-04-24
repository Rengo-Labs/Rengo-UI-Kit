import React, { useState } from 'react'
import { Column, Divider, KeyValueInput, KeyValueText } from '../../atoms'
import { Wrapper } from './styles'
import { InputType } from '../../atoms/KeyValueInput/types'
import { IToken } from '../LiquidityDetails';
interface ISwapMoreInfoProps {
  firstSelectedToken: IToken;
  secondSelectedToken:IToken;
  gasFee: number;
  slippageTolerance: number;
}

/**
 * Render a More info component.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */

export const SwapMoreInfo = ({firstSelectedToken, secondSelectedToken, gasFee, slippageTolerance}: ISwapMoreInfoProps) => {
  const [SlippageTolerance, setSlippageTolerance] = useState<number>(slippageTolerance)
  const [NetworkGasFee, setNetworkGasFee] = useState<number>(gasFee)

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
        <KeyValueText keyText='Minimum received' valueText={`${secondSelectedToken.amount} ${secondSelectedToken.symbol}`} />
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
        <KeyValueText keyText='Route' valueText={`${firstSelectedToken.symbol} > ${secondSelectedToken.symbol}`} />
      </Wrapper>
    </Column>
  )
}
