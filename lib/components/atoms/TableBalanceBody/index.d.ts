import React from 'react';
import { IHeader } from '../../molecules';
interface TableProps {
    row: IHeader;
    heightIcon: number;
    widthIcon: number;
    cryptoColumnWidth: number;
}
export declare const TableBalanceBody: ({ row, heightIcon, widthIcon, cryptoColumnWidth }: TableProps) => React.JSX.Element;
export {};
