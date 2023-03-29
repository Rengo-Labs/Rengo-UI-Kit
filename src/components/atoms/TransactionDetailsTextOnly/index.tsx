import React from "react"
import { InnerWrapper, LeftWrapper, RightWrapper, TokenInfo, Wrapper } from "./styles"

interface TransactionDetailsProps {
  tokenInfo: Array<string>
}

export const TransactionDetailsTextOnly = ({ tokenInfo }: TransactionDetailsProps) => {

  return (
    <Wrapper>
      <InnerWrapper>
        <LeftWrapper>
          Price
        </LeftWrapper>

        <RightWrapper>
          {tokenInfo && (
            tokenInfo.map(info => <TokenInfo key={`token-info${info}`}>{info}</TokenInfo>)
          )}
        </RightWrapper>
      </InnerWrapper>

    </Wrapper>
  )
}