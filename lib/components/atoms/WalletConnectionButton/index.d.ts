import React from 'react';
export interface WalletConnectionButtonProps {
    startIcon?: string;
    endIcon?: string;
    walletID: string;
    isWalletActive: boolean;
    onClick: () => void;
}
/**
  A React component for a wallet connection button.
  @typedef {Object} WalletConnectionButtonProps
  @param {WalletConnectionButtonProps} props - The props of the component.
  @property {string} [startIcon] - The icon to display at the start of the button.
  @property {string} [endIcon] - The icon to display at the end of the button.
  @property {string} walletID - The ID of the wallet.
  @property {boolean} isWalletActive - Whether the wallet is currently active or not.
  @property {Function} onClick - The function to execute when the button is clicked.
*/
export declare const WalletConnectionButton: ({ startIcon, endIcon, walletID, isWalletActive, onClick }: WalletConnectionButtonProps) => React.JSX.Element;
