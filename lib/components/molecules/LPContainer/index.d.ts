import React from 'react';
export interface LPToken {
    contractPackage: string;
    firstTokenIcon: any;
    secondTokenIcon: any;
    isFavorite: boolean;
    firstSymbol: string;
    secondSymbol: string;
    firstAmount: string;
    secondAmount: string;
    userUSDLP: string;
    userLP: string;
    totalUSDLP: string;
    totalLP: string;
    yourShare: string;
    lpStaked: string;
    apr: string;
    onOptionClick: (action: string, firstSymbol: string, secondSymbol: string) => any;
    hasStake: boolean;
    hasGauge: boolean;
    rewardETHTitle?: string;
    rewardCSTTitle?: string;
    hasClaimWETH: boolean;
    hasClaimCST: boolean;
}
export interface LPContainerPros {
    networkLink: string;
    title: string;
    lpTokens: LPToken[];
    toggleActive: boolean;
    toggleAction: any;
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
export declare const LPContainer: ({ networkLink, title, lpTokens, toggleActive, toggleAction }: LPContainerPros) => React.JSX.Element;
