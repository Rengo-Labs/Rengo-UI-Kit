
export enum InputType {
  GASFEE = 'gasFee',
  SLIPPAGETOLERANCE = 'slippageTolerance',
}

export const inputTypeMap = {
  [InputType.GASFEE]: 'CSPR',
  [InputType.SLIPPAGETOLERANCE]: '%'
}