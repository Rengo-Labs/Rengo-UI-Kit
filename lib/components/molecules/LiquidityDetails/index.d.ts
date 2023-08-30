import React from 'react';
export interface IToken {
    amount?: string;
    allowance?: string;
    symbolPair?: string;
    chainId: number;
    contractHash: string;
    decimals: number;
    logoURI: string;
    name: string;
    packageHash: string;
    symbol: string;
    priceUSD?: string;
}
export interface ILiquidityDetailsProps {
    firstSymbol: string;
    secondSymbol: string;
    baseAmount: string | number;
    minAmount: string | number;
    firstTotalLiquidity: string | number;
    secondTotalLiquidity: string | number;
    totalSupply: string | number;
    slippage: number;
    setSlippage: (value: number) => void;
    networkFee: number;
    setNetworkFee: (value: number) => void;
}
/**
 * Render a Liquidity Details.
 * @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */
export declare const LiquidityDetails: ({ firstSymbol, secondSymbol, baseAmount, minAmount, firstTotalLiquidity, secondTotalLiquidity, totalSupply, slippage, setSlippage, networkFee, setNetworkFee }: ILiquidityDetailsProps) => React.JSX.Element;
