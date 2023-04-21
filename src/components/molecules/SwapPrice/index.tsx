import React from 'react'
import { Chart, Column, KeyPairText, Row, TokenOption } from '../../atoms'
import { RowStyled } from './styles'

interface SwapPriceProps {
  firstTokenImg: any
  secondTokenImg: any
}

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

/**
 * Render a Swap Price Molecule.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered the token options and key pair text.
 */

export const SwapPrice = ({ firstTokenImg, secondTokenImg }: SwapPriceProps) => {
  console.log("aaaaaa", firstTokenImg, secondTokenImg)
  return (
    <>
      <Row props={{ className: 'p-1 align-center' }}>
        <Column props={{ xs: 12, md: 6 }}>
          <RowStyled>
            <TokenOption tokenImg={firstTokenImg} token='ETH' option1 />
            <TokenOption tokenImg={secondTokenImg} token='CSPR' option1={false} />
          </RowStyled>
        </Column>
        <Column props={{ xs: 12, md: 6 }}>
          <RowStyled>
            <KeyPairText keyText='Price' pairText='1.4589' />
            <KeyPairText keyText='24H%' pairText='85.10' isPorcentage />
          </RowStyled>
        </Column>
      </Row>
      <Row>
        <Column props={{ xs: 12 }}>
          <Chart data={data} twoColors/>
        </Column>
      </Row>
    </>
  )
}
