export interface HorizontalCardProps {
  networkLink: string
  contractPackage: string
  firstTokenIcon: string
  secondTokenIcon: string
  tokenPairs: Array<string>
  pairsLiquidity: Array<{ name: string, value: string }>
  userPoolInfo: Array<string>
  hasFavorite: boolean
  trashHandler: () => void
  swapHandler: () => void
  viewHandler: () => void
  itemHandler?: () => void
  addLiquidityHandler: () => void
  favoriteHandler: () => void
}

export interface Props {
  hidden?: boolean
  actionsDialogActive?: boolean
}
