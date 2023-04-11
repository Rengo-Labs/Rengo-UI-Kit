import { ReactNode } from "react"

export enum Distribution {
  Center = 'center',
  SpaceAround = 'space-around',
  SpaceEvenly = 'space-evenly',
  SpaceBetween = 'space-between'
}

export enum IconSize {
  Small = 30,
  Large = 45
}

export interface TransactionProps {
  distribution: Distribution
  LeftAdornment?: ReactNode | JSX.Element
  LeftAdornmentCallback?: () => void
  Icon?: string
  iconSize?: IconSize
  tokenNames?: Array<string>
  tokenFullName?: string
  tokenNameSymbols?: Array<string>
  amount?: string
}
