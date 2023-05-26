import React from 'react';
export interface PoolItemDetailsProps {
    closeCallback: () => void;
    isOpen: boolean;
    token0Icon: string;
    token1Icon: string;
    widthIcon?: number;
    heightIcon?: number;
    token0Symbol: string;
    token1Symbol: string;
    isFavorite?: boolean;
    handleFavorite?: () => void;
    yourLiquidityTokens?: string;
    yourLiquidity?: string;
    assetsPooled: {
        asset0: string;
        asset1: string;
    };
    yourShare?: string;
    volume7D?: string;
    fees7D?: string;
}
export declare const PoolItemDetails: ({ closeCallback, isOpen, token0Icon, token1Icon, widthIcon, heightIcon, token0Symbol, token1Symbol, isFavorite, handleFavorite, yourLiquidityTokens, yourLiquidity, assetsPooled, yourShare, volume7D, fees7D, }: PoolItemDetailsProps) => React.JSX.Element;
