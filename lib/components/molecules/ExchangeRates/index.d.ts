import React from 'react';
export interface IExchangeRate {
    handleClickSwap: () => void;
    tokenASymbol: string;
    tokenBSymbol: string;
    exchangeRateA: number;
    exchangeRateB: number;
    getProgress: () => number;
    clearProgress: () => void;
    strokeWidth: number;
    handlerButtonCircle: () => Promise<void>;
}
export declare const ExchangeRates: ({ handleClickSwap, tokenASymbol, tokenBSymbol, exchangeRateA, exchangeRateB, getProgress, clearProgress, strokeWidth, handlerButtonCircle }: IExchangeRate) => React.JSX.Element;
