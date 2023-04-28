export interface IHeaderPool {
    id: number;
    pool: string;
    token1Icon: any;
    token2Icon: any;
    liquidity: string;
    volumen7d: string;
    fees7d: string;
    apr: string;
    actions: string;
    isFavorite?: boolean;
}
export interface PoolableProps {
    data: IHeaderPool[];
    widthIcon?: number;
    heightIcon?: number;
}
export declare const PoolTable: ({ data, widthIcon, heightIcon }: PoolableProps) => JSX.Element;
