export interface ILiquidityPoolState {
  liquidityPercentage: number;
  removeLiquidityCSPR: boolean;
  id: string;
}

export interface PairData {
  id: string
  tokenName: string
  liquidity: string
  allowance: string
  firstIcon: any
  firstName: string
  firstSymbol: string
  firstLiquidity: string
  firstRate: string
  secondIcon: any
  secondName: string
  secondSymbol: string
  secondLiquidity: string
  secondRate: string
}

export interface RemoveLiquidityDialogProps {
  id: string
  closeCallback: (liquidityPool?: ILiquidityPoolState) => ILiquidityPoolState
  liquidityPoolData: PairData
  isOpen: boolean
  disabledButton: boolean
  disabledAllowanceButton: boolean
}