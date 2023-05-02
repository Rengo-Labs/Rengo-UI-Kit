import React from 'react'
import { Chart, Dialog, TokenOption } from '../../atoms'
// @ts-ignore
import ethLogo from '../../../../example/src/assets/icons/eth-logo.svg'
import {
  Wrapper,
  KeyStyle,
  ValueStyle,
  CloseIcon,
  KeyPairWrapper,
  Container
} from './styles'

export interface LiquidityItemDetailProps {
  closeCallback: () => void
  isOpen: boolean
  chartData: any[]
  chart0Name: string
  xAxisName: string
}

export const LiquidityItemDetail = ({ closeCallback, isOpen, chartData, chart0Name, xAxisName }: LiquidityItemDetailProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={closeCallback}>
      <Container>
        <Wrapper>
          <TokenOption
            tokenImg={ethLogo}
            token='ETH'
            option1
            showColor={false}
          />
          <KeyPairWrapper>
            <KeyStyle>Liquidity</KeyStyle>
            <ValueStyle>$5,789</ValueStyle>
          </KeyPairWrapper>
          <KeyPairWrapper>
            <KeyStyle>Actual Price</KeyStyle>
            <ValueStyle>$1.789</ValueStyle>
          </KeyPairWrapper>
          <CloseIcon size={16} onClick={closeCallback}/>
        </Wrapper>
        <Wrapper>
          <Chart data={chartData}
                 width={400}
                 height={250}
                 chart0Name={chart0Name}
                 xAxisName={xAxisName}/>
        </Wrapper>
      </Container>
    </Dialog>
  )
}
