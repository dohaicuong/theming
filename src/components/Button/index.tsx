import { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &{
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent' | 'default'
}
const Button: FC<ButtonProps> = ({ 
  children,
  size = 'md',
  color = 'default',
  className,
  ...props
}) => {
  const classes = useStyles()

  return (
    <button
      {...props}
      className={clsx(
        className,
        classes.base,
        classes[size],
        classes[color],
      )}
    >
      {children}
    </button>
  )
}
export default Button

const useStyles = makeStyles(theme => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 4,
    // transition: theme.transitions.subtle,
  },
  sm: {
    height: 32,
    padding: '4px 16px',
  },
  md: {
    height: 40,
    padding: '8px 16px',
  },
  lg: {
    height: 48,
    padding: '8px 24px',
  },

  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  accent: {
    background: theme.palette.accent.main,
    color: theme.palette.accent.contrastText,
  },
  default: {},
}))