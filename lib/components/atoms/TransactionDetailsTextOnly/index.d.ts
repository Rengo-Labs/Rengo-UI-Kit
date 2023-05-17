import React from "react";
/**
  A component that displays the token information for a transaction in text form only,
  including the token names and their respective values.
  @component
  @param {object} props - The props object.
  @param {Array<string>} props.tokenInfo - An array of token information to be displayed.
  Each element in the array should be a string with the format "token name: token value".
  @return {JSX.Element} - The rendered TransactionDetailsTextOnly component.
*/
export interface TransactionDetailsProps {
    tokenInfo: Array<string>;
}
export declare const TransactionDetailsTextOnly: ({ tokenInfo }: TransactionDetailsProps) => React.JSX.Element;
