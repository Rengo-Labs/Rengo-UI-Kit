import React from 'react';
export interface ISwapMoreInfoProps {
    firstSymbolToken: string;
    firstTokenAmount: number;
    secondSymbolToken: string;
    secondTokenAmount: number;
    priceImpactMessage: string;
    priceImpact: number | string;
    platformGasFee: number;
    networkGasFee: number;
    networkGasFeeSetter: (value: number) => void;
    slippageTolerance: number;
    slippageSetter: (value: number) => void;
    pairPath: any[];
    calculateMinimumTokenReceived: (secondTokenAmount: number, slippageTolerance: number) => number;
    editableSlippage?: boolean;
}
/**
 * Render a More info component.
 *  @param {string} firstSymbolToken - The first token symbol.
 *  @param {number} firstTokenAmount - The first token amount.
 *  @param {string} secondSymbolToken - The second token symbol.
 *  @param {number} secondTokenAmount - The second token amount.
 *  @param {string} priceImpactMessage - The price impact message.
 *  @param {number | string} priceImpact - The price impact value.
 *  @param {number} gasFee - The gas fee value.
 *  @param {number} slippageTolerance - The slippage tolerance value.
 *  @param {array} pairPath - The pair path value.
 *  @param {function} calculateMinimumTokenReceived - The calculate minimum token received value.
 *  @param {function} gasFeeSetter - The gas fee setter value.
 *  @param {function} slippageSetter - The slippage setter value.
 *  @returns  {JSX.Element} The rendered a list of key-value text and inputs.
 */
export declare const SwapMoreInfo: ({ firstSymbolToken, firstTokenAmount, secondSymbolToken, secondTokenAmount, priceImpactMessage, priceImpact, platformGasFee, networkGasFee, networkGasFeeSetter, slippageTolerance, slippageSetter, pairPath, calculateMinimumTokenReceived, editableSlippage }: ISwapMoreInfoProps) => React.JSX.Element;
