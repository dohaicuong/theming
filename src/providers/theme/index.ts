import { DefaultTheme } from '@material-ui/styles'

// COLOR PALETTE
export type ColorPalette = {
  primary: {
    main: string
    textContrast: string
  }
  secondary: {
    main: string
    textContrast: string
  }
  danger: string
  warning: string
  success: string
  note: string
  accent: string
  background: {
    default: string
    paper: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
    hint: string
  }
  neutral: {
    0: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
}
const palette: ColorPalette = {
  primary: {
    main: '#114954',
    textContrast: '#f7f8f8',
  },
  secondary: {
    main: '#65cadf',
    textContrast: '#f7f8f8',
  },
  danger: '#a53b0d',
  warning: '#eeb068',
  success: '#65cadf',
  note: '#5887b1',
  accent: '#d4ff26',
  background: {
    default: '#f7f8f8',
    paper: '#f1f3f3',
  },
  text: {
    primary: '#22292a',
    secondary: '#666f71',
    disabled: '#8c9597',
    hint: '#8c9597',
  },
  neutral: {
    0: '#ffffff',
    100: '#f7f8f8',
    200: '#ebeeef',
    300: '#e6eaea',
    400: '#d3d8d9',
    500: '#b5bec0',
    600: '#8c9597',
    700: '#6d7779',
    800: '#394446',
    900: '#22292a',
  }
}

// TRANSITION
export type Transitions = {
  none: string
  quick: string
  subtle: string
}
const transitions: Transitions = {
  none: 'all 0ms ease 0ms',
  quick: 'all 150ms ease-in-out',
  subtle: 'all 300ms ease',
}

// THEME
export type Theme = DefaultTheme & {
  palette: ColorPalette
  transitions: Transitions
}
const theme: Theme = {
  palette,
  transitions,
}
export default theme