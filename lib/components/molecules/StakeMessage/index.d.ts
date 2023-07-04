import React from 'react';
export interface StakeMessageProps {
    isOpen: boolean;
    tokenImg: string;
    tokenName: string;
    amount: string;
    closeCallback: () => void;
}
export declare const StakeMessage: ({ isOpen, tokenImg, tokenName, amount, closeCallback }: StakeMessageProps) => React.JSX.Element;
