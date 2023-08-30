import React from 'react';
export interface CoinCardPros {
    startIcon: string;
    endIcon: string;
    iconSize?: any;
    title: string;
    tokenBalance: string;
    tokenName: string;
    tokenPrice: string;
    placeholder: string;
    value: string | number;
    onChangeToken: any;
    onChangeValue: any;
    validator?: any;
    gasFee?: number;
}
/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
 * @param title - Text
 * @param tokenBalance - it's the total balance of the selected token.
 * @param tokenName - it's the token name of the selected token.
 * @param tokenPrice - it's the token price expressed in usd.
 * @param placeholder - it's the label value which is shown in the input
 * @param onChangeToken - Token selector's listener
 * @param onChangeValue - Card value's listener
 * @param validator - it's a validator of this token input
 * @param value - value which will be loaded in the card input
 * @constructor
 */
export declare const CoinCard: ({ startIcon, endIcon, iconSize, title, tokenBalance, tokenName, tokenPrice, placeholder, onChangeToken, onChangeValue, validator, value, gasFee }: CoinCardPros) => React.JSX.Element;
