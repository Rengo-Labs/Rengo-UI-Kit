import React from 'react';
interface ITab {
    id: number;
    text: string;
    isActive: boolean;
}
export interface ITabsProps {
    tabs: ITab[];
    onClick: (id: number) => void;
}
/**
 * Render a tabs navigaton.
 * @param {ITab} tabs - The tabs to display.
 * @param {function} onClick - The function to call when the tab is clicked.
 */
export declare const Tabs: ({ tabs, onClick }: ITabsProps) => React.JSX.Element;
export {};
