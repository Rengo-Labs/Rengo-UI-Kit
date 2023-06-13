export interface PairData {
  id: string
  tokenName: string
  liquidity: string
  allowance: string
  gaugeAllowance: string
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
  handleGaugeAllowance: () => void
  liquidityPoolData: PairData
  isOpen: boolean
  disabledButton: boolean
  disabledAllowanceButton: boolean,
  disabledGaugeAllowanceButton: boolean,
  showAllowance: boolean,
  showGaugeAllowance: boolean,
  defaultValue: number,
  calculatedAmounts: {
    gaugeAllowance: string
    lpAmount: number
    firstAmount: number
    secondAmount: number
    allowance: number
  }
}
