export interface IHeaderPool {
    id: number;
    pool: string;
    tokenPairIcon: any;
    tokenPairs: Array<string>;
    liquidity: string;
    volumen7d: string;
    fees7d: string;
    apr: string;
    actions: string;
    isFavorite?: boolean;
}
export interface PoolableProps {
    data: IHeaderPool[];
}
export declare const PoolTable: ({ data }: PoolableProps) => JSX.Element;
