export interface HorizontalCardProps {
  icon: string
  tokenPairs: Array<string>
  pairsLiquidity: Array<{ name: string, value: string }>
  userPoolInfo: Array<string>
  hasFavorite: boolean
  trashHandler: () => void
  swapHandler: () => void
  viewHandler: () => void
  addLiquidityHandler: () => void
  favoriteHandler: () => void
}

export interface Props {
  hidden?: boolean
  actionsDialogActive?: boolean
}
