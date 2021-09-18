import { ReactNode, useState, ChangeEvent } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import Home from '../../pages/Home'

interface TabPanelProps {
  children?: ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      className="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'calc(100vh - 48px)',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '220px',
    display: 'flex',
    alignItems: 'center',
  },
  tab: {
    textTransform: 'none',
    textAlign: 'left',
  },
  alignment: {
    alignItems: 'flex-start',
  },
}))

export function TabsMaster() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          classes={{
            wrapper: classes.alignment,
          }}
          className={classes.tab}
          label="Data Individu"
          {...a11yProps(0)}
        />
        <Tab
          classes={{
            wrapper: classes.alignment,
          }}
          className={classes.tab}
          label="Data Pemeriksaan Fisik"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <Home />
        </MuiPickersUtilsProvider>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  )
}
