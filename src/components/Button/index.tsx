import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { Theme } from 'providers/theme'
import { FC } from 'react'

export type ButtonProps = {
  size?: 'lg' | 'md' | 'sm'
  color?: 'primary' | 'secondary' | 'default'
  variant?: 'filled' | 'minimal'
}

const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  color = 'default',
  variant = 'filled',
}) => {
  const classes = useStyles()

  return (
    <button
      className={clsx(
        classes.base,
        classes[size],
        classes[variant],
        {
          [classes.filledDefault]: variant === 'filled' && color === 'default',
          [classes.filledPrimary]: variant === 'filled' && color === 'primary',
          [classes.filledSecondary]: variant === 'filled' && color === 'secondary',

          [classes.minimalDefault]: variant === 'minimal' && color === 'default',
          [classes.minimalPrimary]: variant === 'minimal' && color === 'primary',
          [classes.minimalSecondary]: variant === 'minimal' && color === 'secondary',
        }
      )}
    >
      {children}
    </button>
  )
}
export default Button

const useStyles = makeStyles((theme: Theme) => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 4,
    transition: theme.transitions.subtle,
  },

  lg: {
    height: 48,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    // typeScale: 3,
    // iconOnlyScale: 4,
    // iconMargin: 4,
  },
  md: {
    height: 40,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    // typeScale: 2,
    // iconOnlyScale: 3,
    // iconMargin: 3,
  },
  sm: {
    height: 32,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    // typeScale: 1,
    // iconOnlyScale: 1,
    // iconMargin: 3,
  },

  filled: {
    boxShadow: '0px 1px 3px rgb(30 37 38 / 6%), 0px 4px 6px rgb(30 37 38 / 8%)',
    '&:hover': {
      filter: 'brightness(85%)',
      boxShadow: '0px 3px 6px rgb(30 37 38 / 8%), 0px 7px 14px rgb(30 37 38 / 10%)'
    },
  },
  filledPrimary: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.textContrast,
  },
  filledSecondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.textContrast,
  },
  filledDefault: {
    background: theme.palette.background.default,
  },

  minimal: {
    background: 'transparent',
  },
  minimalPrimary: {
    color: theme.palette.primary.main,
  },
  minimalSecondary: {
    color: theme.palette.secondary.main,
  },
  minimalDefault: {
    color: theme.palette.text.primary,
  },
}))
