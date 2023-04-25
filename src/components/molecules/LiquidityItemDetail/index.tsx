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

const data = [
  {
    name: '01/23',
    eth: 867,
    cspr: 1245
  },
  {
    name: '02/23',
    eth: 1000,
    cspr: 1398
  },
  {
    name: '03/23',
    eth: 1010,
    cspr: 1410
  },
  {
    name: '04/23',
    eth: 1345,
    cspr: 2035
  },
  {
    name: '05/23',
    eth: 867,
    cspr: 1980
  },
  {
    name: '06/23',
    eth: 950,
    cspr: 2010
  },
  {
    name: '07/23',
    eth: 650,
    cspr: 2670
  }
]

interface LiquidityItemDetailProps {
  closeCallback: () => void
  isOpen: boolean
}

export const LiquidityItemDetail = ({ closeCallback, isOpen }: LiquidityItemDetailProps) => {
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
          <Chart data={data} width={400} height={250} />
        </Wrapper>
      </Container>
    </Dialog>
  )
}
