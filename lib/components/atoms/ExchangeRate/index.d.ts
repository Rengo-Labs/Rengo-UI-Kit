export interface IExchangeRateProps {
    tokenASymbol: string;
    tokenBSymbol: string;
    exchangeRateA: number;
    exchangeRateB: number;
    className?: string;
}
export declare const ExchangeRate: ({ tokenASymbol, tokenBSymbol, exchangeRateA, exchangeRateB, className, }: IExchangeRateProps) => JSX.Element;
