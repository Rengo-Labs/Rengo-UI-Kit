import React from 'react';
export interface IPoolTableItem {
    networkLink: string;
    contractPackage: string;
    id?: string;
    token0Icon: any;
    token1Icon: any;
    widthIcon: number;
    heightIcon: number;
    pool: string;
    yourLiquidity: string;
    volume7d: string;
    fees7d: string;
    assetsPoolToken0: string;
    assetsPoolToken1: string;
    yourShare: string;
    isFavorite?: boolean;
    favoriteHandler?: () => void;
    handleTrash: () => void;
    handleSwap: () => void;
    handleView: () => void;
    handleAddLiquidity: () => void;
    toggleDialog?: () => void;
    actionsDialogActive?: boolean;
    hideRemoveLiquidity: boolean;
}
export declare const PoolTableItem: ({ networkLink, contractPackage, token0Icon, token1Icon, widthIcon, heightIcon, pool, yourLiquidity, volume7d, fees7d, assetsPoolToken0, assetsPoolToken1, yourShare, isFavorite, favoriteHandler, handleTrash, handleSwap, handleView, handleAddLiquidity, toggleDialog, actionsDialogActive, hideRemoveLiquidity }: IPoolTableItem) => React.JSX.Element;
