import React from 'react';
export interface IAccountTransferBody {
    deploy_hash?: string;
    block_hash?: string;
    antiquity?: string;
    of?: string;
    forValue?: string;
    transference_id?: string;
    amount?: number;
    price?: number;
    widthIcon?: number;
    heightIcon?: number;
    handleCopy?: () => void;
}
/**
 * Renders a body from transfer table
 * @param {number} id - Id of the transfer
 * @param {string} deploy_hash - Deploy hash of the transfer
 * @param {string} block_hash - Block hash of the transfer
 * @param {string} antiquity - Antiquity of the transfer
 * @param {string} of - Of of the transfer
 * @param {string} forValue - For of the transfer
 * @param {string} transference_id - Transference id of the transfer
 * @param {string} amount - Amount of the transfer
 * @param {string} price - Price of the transfer
 * @param {number} widthIcon - Width of the icon
 * @param {number} heightIcon - Height of the icon
 * @returns {JSX.Element} - Body from transfer table
 */
export declare const AccountTransferBody: ({ deploy_hash, block_hash, antiquity, of, forValue, transference_id, amount, price, widthIcon, heightIcon }: IAccountTransferBody) => React.JSX.Element;
