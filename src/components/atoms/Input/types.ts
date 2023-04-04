import { ReactNode } from "react"

export enum IconSize {
  Small = 'small',
  Large = 'large'
}

export interface InputProps {
  placeholder: string
  status: Status
  type: Type
  label?: string
  helperText?: string
  rightAdornment: ReactNode | string
  Icon?: ReactNode
  iconSize?: IconSize
  onChange: (e: string) => string
  validator?: (e: string) => string,
  value: any
}

export enum Status {
  Default = 'default',
  Error = 'error',
  Success = 'success'
}

export enum Type {
  IconLabelHelperText = 'icon-label-helper-text',
  IconHelperText = 'icon-helper-text',
  HelperTextOnly = 'helper-text-only',
  Plain = 'plain',
  LabelHelperText = 'label-helper-text',
  LabelIcon = 'label-icon',
  LabelPlain = 'label-plain',
  IconPlain = 'icon-plain'
}

export const TYPES_WITH_ICON = [Type.IconHelperText, Type.IconPlain, Type.LabelIcon, Type.IconLabelHelperText]

export const TYPES_WITH_HELPER_TEXT = [Type.HelperTextOnly, Type.IconHelperText, Type.IconLabelHelperText, Type.LabelHelperText]

export const TYPES_WITH_LABEL = [Type.IconLabelHelperText, Type.LabelIcon, Type.LabelPlain, Type.LabelHelperText]