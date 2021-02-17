import { cyan, lime } from "@material-ui/core/colors"

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'],
      warning: React.CSSProperties['color'],
      success: React.CSSProperties['color'],
      note: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'],
      warning: React.CSSProperties['color'],
      success: React.CSSProperties['color'],
      note: React.CSSProperties['color'],
    }
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary'];
  }
}

export const defaultStatusColors = {
  danger: '#a53b0d',
  warning: '#eeb068',
  success: '#65cadf',
  note: '#5887b1',
}

export const defaultPalette = {
  primary: { main: cyan['800'] },
  secondary: { main: cyan['400'] },
  accent: { main: lime['500'] }
}
