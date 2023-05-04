/// <reference types="react" />
import { ToggleProps } from '../../atoms/Toggle/types';
export interface PageLink {
    icon: any;
    page: string;
    path: string;
    onAction: any;
}
export interface OptAction {
    startIcon: any;
    endIcon: any;
    title: string;
    background: string;
    color: string;
    onAction: () => void;
    onActionConnected?: () => void;
    isWalletConnected?: boolean;
    walletAddress?: string;
}
export interface MenuPros {
    menuIcon: any;
    casperIcon: any;
    title: string;
    links: PageLink[];
    toggle?: ToggleProps;
    rightAction?: OptAction;
    children?: React.ReactNode;
    ref?: React.ForwardedRef<HTMLDivElement>;
    handleRedirect?: () => void;
}
export interface IMenuWrapper {
    isTablet: boolean;
}
export interface IMenuItem {
    clickable?: boolean;
}
export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}
