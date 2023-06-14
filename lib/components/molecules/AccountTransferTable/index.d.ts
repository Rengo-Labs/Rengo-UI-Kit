import React from 'react';
export interface ITransferHeader {
    id: string;
    deploy_hash: string;
    block_hash: string;
    antiquity: string;
    of: string;
    for: string;
    transference_id: string;
    amount: number;
    price: number;
    handleCopy: () => void;
}
export interface TransferTableProps {
    data: ITransferHeader[];
    widthIcon?: number;
    heightIcon?: number;
}
/**
 * Renders a table with the data of the transfer
 * @param {ITransferHeader[]} data - Data to be displayed in the table
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Table with the data of the transfer
 */
export declare const AccountTransferTable: ({ data, widthIcon, heightIcon }: TransferTableProps) => React.JSX.Element;
