export interface TokenData {
  id: string
  name: string
  fullName: string
  amount: string
  tokenImg: string,
  isFavorite: boolean
}

export interface CreatePoolDialogProps {
  isOpen: boolean
  closeCallback: () => void,
  tokenListData: TokenData[],
  popularTokensData: TokenData[],
  onSelectToken: (name: string) => void,
  onSelectFavoriteToken: (name: string) => void,
  handleViewTokenList?: () => void
  explicitMarginTop?: number
}
