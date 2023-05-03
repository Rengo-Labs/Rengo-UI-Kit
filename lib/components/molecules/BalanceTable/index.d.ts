export interface IHeader {
    id: number;
    crypto: string;
    cryptoIcon: string;
    mycrypto: number;
    '24h': string;
    '7d': string;
    '15d': string;
    '30d': string;
}
export interface BalaceTableProps {
    data: IHeader[];
    widthIcon?: number;
    heightIcon?: number;
}
export declare const BalanceTable: ({ data, widthIcon, heightIcon }: BalaceTableProps) => JSX.Element;
