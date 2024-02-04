import { ToggleProps } from '../../atoms/Toggle/types'

export interface PageLink {
  icon: any
  page: string
  path: string
  onAction: any
}

export interface OptActionProps {
  startIcon: any
  endIcon: any
  title: string
  background: string
  color: string
  onAction: () => void
  isWalletConnected?: boolean,
  walletAddress?: string,
}
export interface MenuPros {
  menuIcon: any
  casperIcon: any
  title: string
  links: PageLink[]
  toggle?: ToggleProps
  rightOptionAction: OptActionProps
  rightConnectionAction: OptActionProps
  children?: React.ReactNode
  ref?: React.ForwardedRef<HTMLDivElement>
  handleRedirect?: () => void
}

export interface IMenuWrapper {
  isTablet: boolean
}

export interface IMenuItem {
  clickable?: boolean
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}
