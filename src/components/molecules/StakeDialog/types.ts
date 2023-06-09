export interface PairData {
  id: string
  tokenName: string
  liquidity: string
  allowance: string
  firstIcon: any
  firstName: string
  firstSymbol: string
  secondIcon: any
  secondName: string
  secondSymbol: string
}

export interface StakeDialogProps {
  titleDialog: string
  titleConfirmButton: string
  closeCallback: () => void
  handleChangeInput: (value: number) => void
  handleAction: () => void
  handleAllowance: () => void
  liquidityPoolData: PairData
  isOpen: boolean
  disabledButton: boolean
  disabledAllowanceButton: boolean,
  showAllowance: boolean,
  defaultValue: number,
  calculatedAmounts: {
    lpAmount: number
    firstAmount: number
    secondAmount: number
    allowance: number
  }
}
