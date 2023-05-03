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
    onClickButton0: () => void;
    onClickButton1: () => void;
    graphicData: any[];
    todayPrice: string;
    yesterdayPrice: string;
    xAxisName: string;
    chart0Name: string;
    chart1Name: string;
    charWidth?: number;
    charHeight?: number;
    showChart1: boolean;
    showChart0: boolean;
    tabDefault?: number;
}
/**
 * Render a Tabs.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a Price component and the second one with the more info component.
 */
export declare const SwapTabs: ({ firstTokenImg, secondTokenImg, platformGasFee, slippageTolerance, calculateMinimumTokenReceived, firstSymbolToken, firstTokenAmount, pairPath, secondSymbolToken, secondTokenAmount, priceImpact, priceImpactMessage, networkGasFee, networkGasFeeSetter, slippageSetter, onClickButton0, onClickButton1, graphicData, todayPrice, yesterdayPrice, xAxisName, chart0Name, chart1Name, charWidth, charHeight, showChart1, showChart0, tabDefault }: SwapTabsProps) => JSX.Element;
