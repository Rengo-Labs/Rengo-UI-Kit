import React from 'react'
import {Chart, Column, KeyPairText, Row, TokenOption} from '../../atoms'
import {RowStyled} from './styles'

interface SwapPriceProps {
    firstTokenImg: any
    secondTokenImg: any
    firstTokenSymbol: string
    secondTokenSymbol: string
    graphicData: any
    todayPrice: string
    yesterdayPrice: string
    xAxisName: string
    chart0Name: string
    chart1Name: string
    showChart0: boolean
    showChart1: boolean
    onClickButton0: () => void
    onClickButton1: () => void
    charWidth?: number
    charHeight?: number
}

/**
 * Render a Swap Price Molecule.
 * @param {any} firstTokenImg - The image value to display in the img field.
 * @param {any} secondTokenImg - The image value to display in the img field.
 * @param {() => void} onClickButton - The function to execute when the button is clicked.
 * @returns  {JSX.Element} The rendered the token options and key pair text.
 */

export const SwapPrice = ({
                              firstTokenImg,
                              secondTokenImg,
                              firstTokenSymbol,
                              secondTokenSymbol,
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
                              showChart0
                          }: SwapPriceProps) => {
    return (
        <>
            <Row props={{className: 'p-1 align-center'}}>
                <Column props={{xs: 12, md: 6}}>
                    <RowStyled>
                        <TokenOption onClick={onClickButton0} tokenImg={firstTokenImg} token={firstTokenSymbol} option1/>
                        <TokenOption onClick={onClickButton1} tokenImg={secondTokenImg} token={secondTokenSymbol} option1={false}/>
                    </RowStyled>
                </Column>
                <Column props={{xs: 12, md: 6}}>
                    <RowStyled>
                        <KeyPairText keyText='Price' pairText={todayPrice}/>
                        <KeyPairText keyText='24H%' pairText={yesterdayPrice} isPorcentage/>
                    </RowStyled>
                </Column>
            </Row>
            <Row>
                <Column props={{xs: 12}}>
                    <Chart data={graphicData}
                           width={charWidth}
                           height={charHeight}
                           xAxisName={xAxisName}
                           chart0Name={chart0Name}
                           chart1Name={chart1Name}
                           twoColors
                           showChart0={showChart0}
                           showChart1={showChart1}
                    />
                </Column>
            </Row>
        </>
    )
}
