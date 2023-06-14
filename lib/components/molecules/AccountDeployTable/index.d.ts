import React from 'react';
export interface IDeployHeader {
    id: string;
    deploy_hash: string;
    block_hash: string;
    antiquity: string;
    contract: string;
    contractRedirect: () => void;
    handleCopy: () => void;
    entry_point: string;
    amount: number;
    amountSymbol: string;
    cost: number;
    price: number;
    errorMessage: string;
}
export interface DeployTableProps {
    data: IDeployHeader[];
    widthIcon?: number;
    heightIcon?: number;
}
/**
 * Renders a table with the data of the deploy
 * @param {IDeployHeader[]} data - Data to be displayed in the table
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Table with the data of the deploy
 */
export declare const AccountDeployTable: ({ data, widthIcon, heightIcon }: DeployTableProps) => React.JSX.Element;
