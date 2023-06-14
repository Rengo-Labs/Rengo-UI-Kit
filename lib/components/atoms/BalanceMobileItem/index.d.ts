import React from 'react';
import { IHeader } from '../../molecules';
interface BalanceMobileItemProps {
    networkLink: string;
    row: IHeader;
    heightIcon: number;
    widthIcon: number;
}
export declare const BalanceMobileItem: ({ networkLink, row, heightIcon, widthIcon }: BalanceMobileItemProps) => React.JSX.Element;
export {};
