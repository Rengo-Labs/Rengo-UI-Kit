import React from 'react';
import {ButtonSwapToken, ExchangeRate, ButtonUpdateCircle} from "../../atoms";
import {Container} from './styles';

export interface IExchangeRate {
    handleClickSwap: () => void,
    tokenASymbol: string,
    tokenBSymbol: string,
    exchangeRateA: number,
    exchangeRateB: number,
    getProgress: () => number;
    clearProgress: () => void;
    strokeWidth: number;
    handlerButtonCircle: () => Promise<void>;
}

export const ExchangeRates = ({
                                  handleClickSwap,
                                  tokenASymbol,
                                  tokenBSymbol,
                                  exchangeRateA,
                                  exchangeRateB,
                                  getProgress,
                                  clearProgress,
                                  strokeWidth,
                                  handlerButtonCircle
                              }: IExchangeRate) => {
    return (
        <Container>
            <ButtonSwapToken handleClick={handleClickSwap}/>
            <ExchangeRate tokenASymbol={tokenASymbol}
                          tokenBSymbol={tokenBSymbol}
                          exchangeRateA={exchangeRateA}
                          exchangeRateB={exchangeRateB}
            />
            <ButtonUpdateCircle
                getProgress={getProgress}
                clearProgress={clearProgress}
                strokeWidth={strokeWidth}
                handlerAction={handlerButtonCircle}
            />
        </Container>
    )
}

