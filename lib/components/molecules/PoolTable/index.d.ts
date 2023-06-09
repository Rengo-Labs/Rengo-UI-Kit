import React from 'react';
export interface IHeaderPool {
    contractPackage: string;
    name: string;
    pool: string;
    token0Icon: string;
    token1Icon: string;
    yourLiquidity: string;
    volume7d: string;
    fees7d: string;
    assetsPoolToken0: string;
    assetsPoolToken1: string;
    yourShare: string;
    actions?: string;
    isFavorite?: boolean;
    balance: string;
}
export interface PoolTableProps {
    networkLink: string;
    data: IHeaderPool[];
    widthIcon?: number;
    heightIcon?: number;
    handleSwap: (path: string, pool: string) => void;
    handleView: (name: string) => void;
    handleAddLiquidity: (path: string, pool: string) => void;
    handleTrash: (name: string) => void;
    handleFavorite: (name: string) => void;
    query?: string;
    showStakedOnly?: boolean;
}
export declare const PoolTable: ({ networkLink, data, widthIcon, heightIcon, handleAddLiquidity, handleSwap, handleTrash, handleView, handleFavorite, query, showStakedOnly }: PoolTableProps) => React.JSX.Element;
