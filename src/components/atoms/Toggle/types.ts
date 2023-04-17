export enum Variant {
  Default = 'default',
  ThemeSwitcher = 'theme-switcher',
  InvertedColors = 'inverted-colors'
}
export interface ToggleProps {
    isActive: boolean
    toggle: (e: React.ChangeEvent<HTMLInputElement>) => void
    variant: Variant
    labelText: string
}