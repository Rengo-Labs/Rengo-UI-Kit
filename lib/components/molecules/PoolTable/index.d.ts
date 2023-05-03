export interface IHeaderPool {
    name: string;
    pool: string;
    token0Icon: string;
    token1Icon: string;
    liquidity: string;
    volume7d: string;
    fees7d: string;
    apr: string;
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
    handleTrash: () => void;
    handleFavorite: (name: string) => void;
    query?: string;
    showStakedOnly?: boolean;
}
export declare const PoolTable: ({ data, widthIcon, heightIcon, handleAddLiquidity, handleSwap, handleTrash, handleView, handleFavorite, query, showStakedOnly }: PoolTableProps) => JSX.Element;
