export enum IconSize {
  Small = 30,
  Large = 45
}

export interface RowIconProps {
  tokenName: string
  tokenFullName: string
  iconPath?: string
  iconSize: IconSize
}