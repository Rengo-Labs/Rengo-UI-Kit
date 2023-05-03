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
    yourLiquidity?: string;
    liqudiity?: string;
    assetsPooled: {
        asset0: string;
        asset1: string;
    };
    yourShare?: string;
    volume7D?: string;
    fees7D?: string;
    apr?: string;
}
export declare const PoolItemDetails: ({ closeCallback, isOpen, token0Icon, token1Icon, widthIcon, heightIcon, token0Symbol, token1Symbol, isFavorite, handleFavorite, yourLiquidity, liqudiity, assetsPooled, yourShare, volume7D, fees7D, apr }: PoolItemDetailsProps) => JSX.Element;
