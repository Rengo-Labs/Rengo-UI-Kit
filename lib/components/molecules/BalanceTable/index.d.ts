import React from 'react';
export interface IHeader {
    id: number;
    contractPackage: string;
    crypto: string;
    cryptoIcon: string;
    mycrypto: number;
    marketprice: number;
    mybalance: number;
    '24h': number;
    '7d': number;
    '15d': number;
    '30d': number;
}
export interface BalaceTableProps {
    networkLink: string;
    data: IHeader[];
    widthIcon?: number;
    heightIcon?: number;
}
export declare const BalanceTable: ({ networkLink, data, widthIcon, heightIcon }: BalaceTableProps) => React.JSX.Element;
