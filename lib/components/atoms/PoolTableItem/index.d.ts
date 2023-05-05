export interface IPoolTableItem {
    id?: string;
    token0Icon: any;
    token1Icon: any;
    widthIcon: number;
    heightIcon: number;
    pool: string;
    liquidity: string;
    volume7d: string;
    fees7d: string;
    apr: string;
    isFavorite?: boolean;
    favoriteHandler?: () => void;
    handleTrash: () => void;
    handleSwap: () => void;
    handleView: () => void;
    handleAddLiquidity: () => void;
    toggleDialog?: () => void;
    actionsDialogActive?: boolean;
}
export declare const PoolTableItem: ({ token0Icon, token1Icon, widthIcon, heightIcon, pool, liquidity, volume7d, fees7d, apr, isFavorite, favoriteHandler, handleTrash, handleSwap, handleView, handleAddLiquidity, toggleDialog, actionsDialogActive, }: IPoolTableItem) => JSX.Element;
