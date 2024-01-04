import React, {useLayoutEffect, useState} from 'react'
import {Column, Row, Tabs} from '../../atoms'
import {SwapPrice} from '../SwapPrice'
import {SwapMoreInfo} from '../SwapMoreInfo'
import {Item, TabContent} from './styles'
import {IToken} from '../LiquidityDetails'

export interface SwapTabsProps {
    firstTokenImg: any
    secondTokenImg: any
    firstSelectedToken: IToken
    secondSelectedToken: IToken
    platformGasFee: number
    slippageTolerance: number,
    calculateMinimumTokenReceived: any
    firstSymbolToken: string,
    firstTokenAmount: number,
    pairPath: any[],
    secondSymbolToken: string,
    secondTokenAmount: number,
    networkGasFee: number;
    networkGasFeeSetter: (value: number) => void;
    priceImpact: number | string;
    priceImpactMessage: string;
    slippageSetter: (value: number) => void;
    // graphic
    onClickButton0: () => void,
    onClickButton1: () => void,
    graphicData: any[],
    todayPrice: string,
    yesterdayPrice: string,
    xAxisName: string,
    chart0Name: string,
    chart1Name: string,
    charWidth?: number,
    charHeight?: number,
    showChart1: boolean,
    showChart0: boolean
    tabDefault?: number
    editableSlippage?: boolean,
    feeSymbol: string
}

/**
 * Render a Tabs.
 * @param {any} tokenImg - The image value to display in the img field.
 * @returns  {JSX.Element} The rendered two tabs, the first one with a Price component and the second one with the more info component.
 */

export const SwapTabs = ({
                             firstTokenImg,
                             secondTokenImg,
                             platformGasFee,
                             slippageTolerance,
                             calculateMinimumTokenReceived,
                             firstSymbolToken,
                             firstTokenAmount,
                             pairPath,
                             secondSymbolToken,
                             secondTokenAmount,
                             priceImpact,
                             priceImpactMessage,
                             networkGasFee,
                             networkGasFeeSetter,
                             slippageSetter,
                             // graphic
                             onClickButton0,
                             onClickButton1,
                             graphicData,
                             todayPrice,
                             yesterdayPrice,
                             xAxisName,
                             chart0Name,
                             chart1Name,
                             charWidth,
                             charHeight,
                             showChart1,
                             showChart0,
                             tabDefault = 1,
                             editableSlippage = true,
                             feeSymbol = firstSymbolToken
                         }: SwapTabsProps) => {
    const swapPriceTab = (
        <SwapPrice
            firstTokenImg={firstTokenImg}
            secondTokenImg={secondTokenImg}
            firstTokenSymbol={firstSymbolToken}
            secondTokenSymbol={secondSymbolToken}
            onClickButton0={onClickButton0}
            onClickButton1={onClickButton1}
            graphicData={graphicData}
            todayPrice={todayPrice}
            yesterdayPrice={yesterdayPrice}
            xAxisName={xAxisName}
            chart0Name={chart0Name}
            chart1Name={chart1Name}
            charWidth={charWidth}
            charHeight={charHeight}
            showChart1={showChart1}
            showChart0={showChart0}
        />)

    const swapMoreInfoTab = (
        <SwapMoreInfo
            gasFeeTokenAmount={platformGasFee}
            slippageTolerance={slippageTolerance}
            calculateMinimumTokenReceived={calculateMinimumTokenReceived}
            firstSymbolToken={firstSymbolToken}
            firstTokenAmount={firstTokenAmount}
            pairPath={pairPath}
            secondSymbolToken={secondSymbolToken}
            secondTokenAmount={secondTokenAmount}
            networkGasFee={networkGasFee}
            networkGasFeeSetter={networkGasFeeSetter}
            priceImpact={priceImpact}
            priceImpactMessage={priceImpactMessage}
            slippageSetter={slippageSetter}
            editableSlippage={editableSlippage}
            feeSymbol={feeSymbol}
        />
    )

    const tabsElement = [

        {
            id: 2,
            text: 'More Info',
            isActive: true,
            component: swapMoreInfoTab
        }
    ]

    const [tabs, setTabs] = useState(tabsElement)

    useLayoutEffect(() => {
        setTabs((prevTabs) => (
            prevTabs.map((tab) => (
                {
                    ...tab,
                    component: swapMoreInfoTab
                }
            ))
        ))
    }, [
        firstTokenImg,
        secondTokenImg,
        platformGasFee,
        slippageTolerance,
        calculateMinimumTokenReceived,
        firstSymbolToken,
        firstTokenAmount,
        pairPath,
        secondSymbolToken,
        secondTokenAmount,
        priceImpact,
        priceImpactMessage,
        networkGasFee,
        networkGasFeeSetter,
        slippageSetter
    ])

    const handleTabClick = (id: number) => {
        const newTabs = tabs.map((tab) => {
            if (tab.id === id) {
                return {
                    ...tab,
                    isActive: true
                }
            } else {
                return {
                    ...tab,
                    isActive: true
                }
            }
        })

        setTabs(newTabs)
    }

    return (
        <Column props={{
            xs: 12,
            id: 'swap-tabs'
        }}>
            <Row>
                <Tabs tabs={tabs} onClick={handleTabClick}/>
            </Row>
            <TabContent>
                {tabs.map((tab, index) => {
                  return <Item key={tab.id}>{tab.component}</Item>
                })}
            </TabContent>
        </Column>
    )
}
