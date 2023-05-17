import React from 'react';
export interface LPToken {
    firstTokenIcon: any;
    secondTokenIcon: any;
    isFavorite: boolean;
    firstSymbol: string;
    secondSymbol: string;
    firstAmount: string;
    secondAmount: string;
    userLP: string;
    totalLP: string;
    onOptionClick: (action: string, firstSymbol: string, secondSymbol: string) => any;
}
export interface LPContainerPros {
    title: string;
    lpTokens: LPToken[];
}
/***
 *
 * @param startIcon - it shows the selected token icon currently
 * @param endIcon - it shows the arrow icon to show a token list to be selected
 * @param iconSize
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
export declare const LPContainer: ({ title, lpTokens }: LPContainerPros) => React.JSX.Element;
