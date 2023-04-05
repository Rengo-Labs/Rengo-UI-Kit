import React from 'react'
import { Chart, Column, KeyPairText, Row, TokenOption } from '../../atoms'
import { RowStyled } from './styles'

interface SwapPriceProps {
  tokenImg: any
}

/**
 * Render a Swap Price Molecule.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered the token options and key pair text.
 */

export const SwapPrice = ({ tokenImg }: SwapPriceProps) => {
  return (
    <>
      <Row props={{ className: 'p-1 align-center' }}>
        <Column props={{ xs: 12, md: 6 }}>
          <RowStyled>
            <TokenOption tokenImg={tokenImg} token='ETH' option1 />
            <TokenOption tokenImg={tokenImg} token='CSPR' option1={false} />
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
          <Chart />
        </Column>
      </Row>
    </>
  )
}
