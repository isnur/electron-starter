import { makeStyles, Theme } from '@material-ui/core/styles'
import { GlobalStyle } from './styles/GlobalStyle'
import TabsMenu from './components/TabsMenu'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '200px',
    display: 'flex',
    alignItems: 'center',
  },
}))

export function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GlobalStyle />
      <TabsMenu />
    </div>
  )
}
