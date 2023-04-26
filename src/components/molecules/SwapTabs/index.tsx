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
                             slippageSetter
                         }: SwapTabsProps) => {
    const swapPriceTab = ( <SwapPrice
        firstTokenImg={firstTokenImg}
        secondTokenImg={secondTokenImg}
        onClickButton={() => {
            console.log('click')
        }}
    />)

    const swapMoreInfoTab = (
        <SwapMoreInfo
            platformGasFee={platformGasFee}
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
        />
    )

    const tabsElement = [
        {
            id: 1,
            text: 'Price',
            isActive: true,
            component: swapPriceTab
        },
        {
            id: 2,
            text: 'More Info',
            isActive: false,
            component: swapMoreInfoTab
        }
    ]

    const [tabs, setTabs] = useState(tabsElement)

    useLayoutEffect(() => {
        setTabs((prevTabs) => (
            prevTabs.map((tab) => (
                {
                    ...tab,
                    component: tab.id === 1 ? swapPriceTab : swapMoreInfoTab
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
                    isActive: false
                }
            }
        })

        setTabs(newTabs)
    }

    return (
        <Column props={{xs: 12}}>
            <Row>
                <Tabs tabs={tabs} onClick={handleTabClick}/>
            </Row>
            <TabContent>
                {tabs.map((tab, index) => {
                    if (tab.isActive) {
                        return <Item key={tab.id}>{tab.component}</Item>
                    }
                })}
            </TabContent>
        </Column>
    )
}
