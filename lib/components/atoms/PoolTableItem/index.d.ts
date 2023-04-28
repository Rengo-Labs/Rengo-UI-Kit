export interface IPoolTableItem {
    id?: string;
    token1Icon: any;
    token2Icon: any;
    widthIcon: number;
    heightIcon: number;
    pool: string;
    liquidity: string;
    volumen7d: string;
    fees7d: string;
    apr: string;
    isFavorite?: boolean;
    favoriteHandler?: () => void;
    handleTrash: () => void;
    handleSwap: () => void;
    handleView: () => void;
    handleAddLiquidity: () => void;
}
export declare const PoolTableItem: ({ token1Icon, token2Icon, widthIcon, heightIcon, pool, liquidity, volumen7d, fees7d, apr, isFavorite, favoriteHandler, handleTrash, handleSwap, handleView, handleAddLiquidity }: IPoolTableItem) => JSX.Element;
