import React, {useState} from 'react'
import { ExchangeRateContainer, ExchangeRateRow, ExchangeRateColumn} from "./styles";

export interface IExchangeRateProps {
    tokenASymbol: string,
    tokenBSymbol: string,
    exchangeRateA: number,
    exchangeRateB: number,
    className?: string,
}
export const ExchangeRate = ({
    tokenASymbol,
    tokenBSymbol,
    exchangeRateA,
    exchangeRateB,
    className,
} : IExchangeRateProps) => {
    const [switchRate, switchRateSetter] = React.useState(false)
    const handleUpdateTokens = () => {
        switchRateSetter(!switchRate)
    }
    return (
        <ExchangeRateContainer className={className}>
            <ExchangeRateRow data-testid={switchRate} onClick={handleUpdateTokens}>
                { switchRate ?
                    <ExchangeRateColumn>
                        {exchangeRateB ? (exchangeRateB).toFixed(6): '???'} {tokenASymbol} ≈ 1 {tokenBSymbol}
                    </ExchangeRateColumn> :
                    <ExchangeRateColumn>
                        {exchangeRateA ? (exchangeRateA).toFixed(6): '???'} {tokenBSymbol} ≈ 1 {tokenASymbol}
                    </ExchangeRateColumn>
                }
            </ExchangeRateRow>
        </ExchangeRateContainer>
    )
}
