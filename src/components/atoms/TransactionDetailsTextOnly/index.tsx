import React from "react"
import { InnerWrapper, LeftWrapper, RightWrapper, TokenInfo, Wrapper } from "./styles"

/**
  A component that displays the token information for a transaction in text form only,
  including the token names and their respective values.
  @component
  @param {object} props - The props object.
  @param {Array<string>} props.tokenInfo - An array of token information to be displayed.
  Each element in the array should be a string with the format "token name: token value".
  @return {JSX.Element} - The rendered TransactionDetailsTextOnly component.
*/

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