import { ReactNode } from "react"

export interface ClaimDialogProps {
  titleDialog: string
  titleConfirmButton: string
  closeCallback: () => void
  handleAction: () => void
  isOpen: boolean
  disabledButton: boolean
  networkGasFee: number,
  networkGasFeeSetter: (value: number) => void,
  children: ReactNode
}