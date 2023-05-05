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
  key: string
  distribution: Distribution
  LeftAdornment?: ReactNode | JSX.Element
  LeftAdornmentCallback?: () => void
  Icon?: string
  OptIcon?: string
  iconSize?: IconSize
  tokenNames?: Array<string>
  tokenFullName?: string
  tokenNameSymbols?: Array<string>
  amount?: string
  isLast?: boolean
  onSelectToken?: () => void
  iconWidth?: number
  iconHeight?: number
}
