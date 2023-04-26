interface SwapPriceProps {
    firstTokenImg: any;
    secondTokenImg: any;
    onClickButton?: () => void;
}
/**
 * Render a Swap Price Molecule.
 * @param {any} firstTokenImg - The image value to display in the img field.
 * @param {any} secondTokenImg - The image value to display in the img field.
 * @param {() => void} onClickButton - The function to execute when the button is clicked.
 * @returns  {JSX.Element} The rendered the token options and key pair text.
 */
export declare const SwapPrice: ({ firstTokenImg, secondTokenImg, onClickButton }: SwapPriceProps) => JSX.Element;
export {};
