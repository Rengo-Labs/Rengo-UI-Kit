import { darkTheme, defaultTheme } from '../styles'

interface ITheme {
  default: any
  dark: any
}

export const theme: ITheme = {
  default: defaultTheme,
  dark: darkTheme
}
