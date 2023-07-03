import React from 'react';
export interface StakeMessageProps {
    isOpen: boolean;
    tokenImg: string;
    tokenName: string;
    amount: string;
}
export declare const StakeMessage: ({ isOpen, tokenImg, tokenName, amount }: StakeMessageProps) => React.JSX.Element;
