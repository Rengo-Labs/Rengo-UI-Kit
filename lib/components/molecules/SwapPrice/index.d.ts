interface SwapPriceProps {
    firstTokenImg: any;
    secondTokenImg: any;
    firstTokenSymbol: string;
    secondTokenSymbol: string;
    graphicData: any;
    todayPrice: string;
    yesterdayPrice: string;
    xAxisName: string;
    chart0Name: string;
    chart1Name: string;
    showChart0: boolean;
    showChart1: boolean;
    onClickButton0: () => void;
    onClickButton1: () => void;
    charWidth?: number;
    charHeight?: number;
}
/**
 * Render a Swap Price Molecule.
 * @param {any} firstTokenImg - The image value to display in the img field.
 * @param {any} secondTokenImg - The image value to display in the img field.
 * @param {() => void} onClickButton - The function to execute when the button is clicked.
 * @returns  {JSX.Element} The rendered the token options and key pair text.
 */
export declare const SwapPrice: ({ firstTokenImg, secondTokenImg, firstTokenSymbol, secondTokenSymbol, onClickButton0, onClickButton1, graphicData, todayPrice, yesterdayPrice, xAxisName, chart0Name, chart1Name, charWidth, charHeight, showChart1, showChart0 }: SwapPriceProps) => JSX.Element;
export {};