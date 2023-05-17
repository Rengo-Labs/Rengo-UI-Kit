import React from 'react';
export interface IButtonWalletProps {
    handleClick: (() => void) | undefined;
    accountHashString?: string | null;
}
export declare const ButtonWallet: ({ handleClick, accountHashString }: IButtonWalletProps) => React.JSX.Element;
