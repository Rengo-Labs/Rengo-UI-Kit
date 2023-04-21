import { ToggleProps } from '../../atoms/Toggle/types'

export interface PageLink {
  icon: any
  page: string
  path: string
  onAction: any
}

export interface OptAction {
  startIcon: any
  endIcon: any
  title: string
  background: string
  color: string
  onAction: any
}
export interface MenuPros {
  menuIcon: any
  title: string
  links: PageLink[]
  toggle?: ToggleProps
  rightAction?: OptAction
  children?: React.ReactNode
}

export interface IMenuItem {
  clickable?: boolean
}

export interface ImageProps {
  src: string
  alt: string
  size: number
}
