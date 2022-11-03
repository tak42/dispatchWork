import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState, useContext, useMemo } from 'react'
import Chart from './Chart'
import Deposits from './Deposits'
import Orders from './Orders'
import Menu from './Menu'
import SubMenu from './SubMenu'
import { loggedInState } from '../../src/globalState/loggedInState'
import { WorkState, useWorkState } from '../../src/globalState/workState'
import { EmployeeMenus } from '../../src/work/technicalEmployee'
import List from '@mui/material/List'
import Copyright from './Copyright'
import AppBar from './AppBar'
import Drawer from './Drawer'

export const drawerWidth = 240

const paperSx = {
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  height: 240,
}

const mainSx = (theme: Theme) => {
  return {
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }
}

const mdTheme = createTheme()

function DashboardContent() {
  const Work = useWorkState()

  const [open, setOpen] = useState(true)

  const Title: string = useMemo<string>(() => {
    const findMenu = EmployeeMenus.find((menu) => menu.work === Work.state)
    if (findMenu === undefined) return 'Dashboard'
    return findMenu.title
  }, [EmployeeMenus, Work])

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const loggedIn = useContext(loggedInState)

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              {Title}
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => {
                console.log(loggedIn.state)
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <WorkState.Provider value={Work}>
            <List component="nav">
              <Menu />
              <Divider sx={{ my: 1 }} />
              <SubMenu />
            </List>
          </WorkState.Provider>
        </Drawer>
        {Work.state === '' ? (
          <Box component="main" sx={mainSx(mdTheme)}>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper sx={paperSx}>
                    <Chart />
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper sx={paperSx}>
                    <Deposits />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        ) : (
          <Box component="main" sx={mainSx(mdTheme)}>
            <div>{Work.state}</div>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
