export interface HorizontalCardProps {
  networkLink: string
  contractPackage: string
  firstTokenIcon: string
  secondTokenIcon: string
  tokenPairs: Array<string>
  pairsLiquidity: Array<{ name: string, value: string }>
  userPoolInfo: Array<PoolInfoProps>
  hasFavorite: boolean
  trashHandler: () => void
  swapHandler: () => void
  viewHandler: () => void
  itemHandler?: () => void
  stakeHandler?: () => void
  unstakeHandler?: () => void
  claimHandlerWETH?: () => void
  claimHandlerCST?: () => void
  addLiquidityHandler: () => void
  favoriteHandler: () => void
  toggleDialog: () => void
  actionsDialogActive: boolean
  hasBalance?: boolean
  hasStake: boolean
  hasGauge: boolean
  rewardETHTitle?: string,
  rewardCSTTitle?: string,
  hasClaimWETH?: boolean
  hasClaimCST?: boolean
}

export interface PoolInfoProps {
  title: string
  value: string
}

export interface Props {
  hidden?: boolean
  actionsDialogActive?: boolean
}
