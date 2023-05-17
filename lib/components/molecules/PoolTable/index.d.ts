import React from 'react';
export interface IHeaderPool {
    name: string;
    pool: string;
    token0Icon: string;
    token1Icon: string;
    liquidity: number;
    volume7d: number;
    fees7d: number;
    apr: number;
    actions?: string;
    isFavorite?: boolean;
    balance: string;
}
export interface PoolTableProps {
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
export declare const PoolTable: ({ data, widthIcon, heightIcon, handleAddLiquidity, handleSwap, handleTrash, handleView, handleFavorite, query, showStakedOnly }: PoolTableProps) => React.JSX.Element;
