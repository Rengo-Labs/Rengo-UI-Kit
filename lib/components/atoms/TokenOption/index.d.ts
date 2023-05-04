export interface TokenOptionProps {
    tokenImg: any;
    token: string;
    option1: boolean;
    onClick?: () => void;
    showColor?: boolean;
    height?: number;
    width?: number;
}
/**
 * Render a Token Tag.
 * @param {any} tokenImg - The image value to display in the img field.
 * @param {string} token - The token text to display in the token field.
 * @param {boolean} option1 - The grafic color to show in the ellipse.
 * @returns  {JSX.Element} The rendered the key-value text.
 */
export declare const TokenOption: ({ tokenImg, token, option1, onClick, showColor, height, width }: TokenOptionProps) => JSX.Element;
