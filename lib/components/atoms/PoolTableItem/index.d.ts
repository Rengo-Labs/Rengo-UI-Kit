export interface IPoolTableItem {
    id?: string;
    token0Icon: any;
    token1Icon: any;
    widthIcon: number;
    heightIcon: number;
    pool: string;
    liquidity: number;
    volume7d: number;
    fees7d: number;
    apr: number;
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
export declare const PoolTableItem: ({ token0Icon, token1Icon, widthIcon, heightIcon, pool, liquidity, volume7d, fees7d, apr, isFavorite, favoriteHandler, handleTrash, handleSwap, handleView, handleAddLiquidity, toggleDialog, actionsDialogActive, hideRemoveLiquidity }: IPoolTableItem) => JSX.Element;
