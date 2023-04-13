export interface TokenData {
  id: string
  name: string
  fullName: string
  amount: string
}

export interface CreatePoolDialogProps {
  closeCallback: () => void
  tokenListData: TokenData[]
  popularTokensData: TokenData[]
}