export interface PairData {
    id: string;
    tokenName: string;
    liquidity: string;
    allowance: string;
    firstIcon: any;
    firstName: string;
    firstSymbol: string;
    firstLiquidity: string;
    firstRate: string;
    secondIcon: any;
    secondName: string;
    secondSymbol: string;
    secondLiquidity: string;
    secondRate: string;
}
export interface RemoveLiquidityDialogProps {
    closeCallback: () => void;
    handleChangeInput: (value: number) => void;
    handleRemoveLiquidity: () => void;
    handleAllowanceLiquidity: () => void;
    handleToggle: (value: boolean) => void;
    liquidityPoolData: PairData;
    isOpen: boolean;
    disabledButton: boolean;
    disabledAllowanceButton: boolean;
    showAllowance: boolean;
    isRemoveLiquidityCSPR: boolean;
    defaultValue: number;
    firstRate: string;
    secondRate: string;
    calculatedAmounts: {
        lpAmount: number;
        firstAmount: number;
        secondAmount: number;
        allowance: number;
    };
    showToggle: boolean;
}
