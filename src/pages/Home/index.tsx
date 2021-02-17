import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core'
import { useMemo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { defaultPalette, defaultStatusColors } from 'theme'
import useQueryString from 'use-query-string'
import Button from 'components/Button'

const Home = () => {
  const location = useLocation()
  const history = useHistory()
  const [query] = useQueryString(location as any, history.push) as any
  
  const { primary, secondary } = query
  const theme = useMemo(() => createMuiTheme({
    status: defaultStatusColors,
    palette: {
      ...defaultPalette,
      primary: { main: primary ? `#${primary}` : defaultPalette.primary.main },
      secondary: { main: secondary ? `#${secondary}` : defaultPalette.secondary.main },
    }
  }), [primary, secondary])

  return (
    <ThemeProvider theme={theme}>
      <Something />
    </ThemeProvider>
  )
}
export default Home

const Something = () => {
  const theme = useTheme()
  console.log(theme)

  return (
    <>
      <Button color='primary' style={{ margin: 8 }}>primary color</Button>
      <Button color='secondary' style={{ margin: 8 }}>secondary color</Button>
      <Button color='accent' style={{ margin: 8 }}>accent color</Button>
      <Button style={{ margin: 8 }}>default color</Button>
    </>
  )
}
