import React from "react";
import { 
  TokenInnerWrapper,
    TokenFullName,
    TokenName,
    TokenDetailsWrapper,
    Wrapper,
    Image,
    TokenNameSymbol,
    LeftAdornmentWrapper,
    AmountWrapper,
    TokenNameSymbolWrapper,
    TokenNamesWrapper
  } from "./styles";
import { TransactionProps } from "./types";

/**

  Displays details of a transaction, including the distribution of the components,
  an optional left adornment, an optional icon, and token information such as token names,
  full name, symbols, and amount.
  @component
  @param {object} props - The props object.
  @param {Distribution} props.distribution - Specifies how the components should be distributed along the main axis.
  Possible values are 'center', 'space-around', 'space-evenly', and 'space-between'.
  @param {ReactNode} [props.LeftAdornment] - Optional element to be displayed on the left side of the component. This could be a Feather Icon component.
  @param {function} [props.LeftAdornmentCallback] - Optional callback function to handle user click of the LeftAdornment. Consumer must implement the handler.
  @param {string} [props.Icon] - Icon component to be displayed on the component.
  @param {IconSize} [props.iconSize] - Size of the icon to be displayed on the component.
  Possible values are 'Small' (30px) and 'Large' (45px).
  @param {Array<string>} [props.tokenNames] - Optional array of token names to be displayed on the component.
  @param {string} [props.tokenFullName] - Optional full name of the token to be displayed on the component. This will be below the token name.
  @param {Array<string>} [props.tokenNameSymbols] - Optional array of token symbols to be displayed on the component. This will be to the right side of the token name.
  @param {string} [props.amount] - Amount of the token to be displayed on the component.
  @return {JSX.Element} - Rendered TransactionDetails component.
*/
export const TransactionDetails = ({
  distribution, LeftAdornment, LeftAdornmentCallback, Icon, iconSize, tokenNames, tokenFullName,
  tokenNameSymbols, amount}: TransactionProps) => {

  return (
    <Wrapper distribution={distribution}>
      <TokenInnerWrapper>
        {LeftAdornment && (
          <LeftAdornmentWrapper onClick={LeftAdornmentCallback}>
            {LeftAdornment}
          </LeftAdornmentWrapper>
        )}

        {Icon && (
          <Image src={Icon} alt='token' iconSize={iconSize} />
        )}

        <TokenDetailsWrapper tokenNameSymbol={tokenNameSymbols}>

          <TokenNamesWrapper tokenNames={tokenNames} distribution={distribution}>
            {tokenNames && tokenNames?.length > 0 && tokenNames?.map(name => (
              <TokenName key={`token-${name}`}>{name}</TokenName>
            ))} 
          </TokenNamesWrapper>

          {TokenFullName && (
            <TokenFullName>{tokenFullName}</TokenFullName>
          )}

          {tokenNameSymbols && tokenNameSymbols?.length > 0 && (
            <TokenNameSymbolWrapper>
              <TokenNameSymbol>{tokenNameSymbols[0]}</TokenNameSymbol>
              <TokenNameSymbol>{tokenNameSymbols[1]}</TokenNameSymbol>
            </TokenNameSymbolWrapper>
          )}

        </TokenDetailsWrapper>
      </TokenInnerWrapper>

      <AmountWrapper distribution={distribution}>
        {amount}
      </AmountWrapper>

    </Wrapper>
  )
}
