import { IToken } from '../LiquidityDetails';
export interface SwapTabsProps {
    firstTokenImg: any;
    secondTokenImg: any;
    firstSelectedToken: IToken;
    secondSelectedToken: IToken;
    platformGasFee: number;
    slippageTolerance: number;
    calculateMinimumTokenReceived: any;
    firstSymbolToken: string;
    firstTokenAmount: number;
    pairPath: any[];
    secondSymbolToken: string;
    secondTokenAmount: number;
    networkGasFee: number;
    networkGasFeeSetter: (value: number) => void;
    priceImpact: number | string;
    priceImpactMessage: string;
    slippageSetter: (value: number) => void;
}
/**
 * Render a Tabs.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a Price component and the second one with the more info component.
 */
export declare const SwapTabs: ({ firstTokenImg, secondTokenImg, platformGasFee, slippageTolerance, calculateMinimumTokenReceived, firstSymbolToken, firstTokenAmount, pairPath, secondSymbolToken, secondTokenAmount, priceImpact, priceImpactMessage, networkGasFee, networkGasFeeSetter, slippageSetter }: SwapTabsProps) => JSX.Element;
