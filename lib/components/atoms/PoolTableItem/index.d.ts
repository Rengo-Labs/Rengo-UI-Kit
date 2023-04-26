export interface IPoolTableItem {
    id?: string;
    tokenPairIcon: string;
    tokenPairs: Array<string>;
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
export declare const PoolTableItem: ({ tokenPairIcon, tokenPairs, liquidity, volumen7d, fees7d, apr, isFavorite, favoriteHandler, handleTrash, handleSwap, handleView, handleAddLiquidity }: IPoolTableItem) => JSX.Element;
