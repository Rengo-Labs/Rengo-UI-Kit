import React, {useState} from 'react'
import {Column, Divider, KeyValueInput, KeyValueText} from '../../atoms'
import {Wrapper} from './styles'
import {InputType} from '../../atoms/KeyValueInput/types'

interface ISwapMoreInfoProps {
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

export const SwapMoreInfo = ({
                                 firstSymbolToken,
                                 firstTokenAmount,
                                 secondSymbolToken,
                                 secondTokenAmount,
                                 priceImpactMessage,
                                 priceImpact,
                                 platformGasFee,
                                 networkGasFee,
                                 networkGasFeeSetter,
                                 slippageTolerance,
                                 slippageSetter,
                                 pairPath,
                                 calculateMinimumTokenReceived
                             }: ISwapMoreInfoProps) => {

    const parirPathValue = pairPath.length > 0 ?
        pairPath.map((item, index) => index === pairPath.length - 1 ? item : `${item} > `).join('') :
        `${firstSymbolToken} > ${secondSymbolToken}`

    return (
        <Column props={{xs: 12}}>
            <Wrapper>
                <KeyValueText keyText='Swapping Through' valueText='CasperSwap Pool'/>
                <Divider/>
                <KeyValueText keyText='Minimum received'
                              valueText={`${calculateMinimumTokenReceived(secondTokenAmount, slippageTolerance)} ${secondSymbolToken}`}/>
                <Divider/>
                <KeyValueText keyText={`${priceImpactMessage}`} valueText={`${priceImpact} %`}/>
                <Divider/>
                <KeyValueInput
                    keyText='Slippage Tolerance'
                    value={slippageTolerance}
                    inputType={InputType.SLIPPAGETOLERANCE}
                    onChange={slippageSetter}
                />
                <Divider/>
                <KeyValueText keyText='Swapp Fee' valueText={`${firstTokenAmount * platformGasFee} CSPR`}/>
                <Divider/>
                <KeyValueInput
                    keyText='Network gas fee'
                    value={networkGasFee}
                    inputType={InputType.GASFEE}
                    onChange={networkGasFeeSetter}
                />
                <Divider/>
                <KeyValueText keyText='Route' valueText={parirPathValue.toString()}/>
            </Wrapper>
        </Column>
    )
}
