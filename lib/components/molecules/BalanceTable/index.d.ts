export interface IHeader {
    id: number;
    crypto: string;
    cryptoIcon: string;
    mycrypto: number;
    '24h': number;
    '7d': number;
    '15d': number;
    '30d': number;
}
export interface BalaceTableProps {
    data: IHeader[];
    widthIcon?: number;
    heightIcon?: number;
}
export declare const BalanceTable: ({ data, widthIcon, heightIcon }: BalaceTableProps) => JSX.Element;
