export interface ILiquidityPoolState {
    liquidityPercentage: number;
    removeLiquidityCSPR: boolean;
    id: string;
}
export interface TokenData {
    id: string;
    tokenNames: string[];
    tokenNameSymbols: string[];
    amount: string;
    tokenImg: string;
}
export interface RemoveLiquidityDialogProps {
    id: string;
    closeCallback: (liquidityPool?: ILiquidityPoolState) => ILiquidityPoolState;
    liquidityPoolData: TokenData[];
    tokenImg: string;
    isOpen: boolean;
}
