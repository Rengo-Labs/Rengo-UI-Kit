import React from 'react';
import { IHeader } from '../../molecules';
interface TableProps {
    networkLink: string;
    row: IHeader;
    heightIcon: number;
    widthIcon: number;
    cryptoColumnWidth: number;
}
export declare const TableBalanceBody: ({ networkLink, row, heightIcon, widthIcon, cryptoColumnWidth }: TableProps) => React.JSX.Element;
export {};
