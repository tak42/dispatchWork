import Attendance from './kintai'
import ReportWriting from './weekly'
import type { Work } from '../../src/work/technicalEmployee'
import Box from '@mui/material/Box'
import Drawer from '../dashborad/Drawer'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Container from '@mui/material/Container'
import SubMenu from '../dashborad/SubMenu'
import { mainSx } from '../dashborad/Dashboard'
import List from '@mui/material/List'
import { createTheme } from '@mui/material/styles'
import { useState, useContext } from 'react'
import { WorkState } from '../../src/globalState/workState'

const mdTheme = createTheme()

type report = { [key in Work]?: JSX.Element }
const reportComponents: report = {
  attendance: <Attendance />,
  reportWriting: <ReportWriting />,
}

export const SwitchReport = (work: Work) => {
  return reportComponents[work]
}

const WorkBoardContent = () => {
  const workContext = useContext(WorkState)

  const [open, setOpen] = useState(true)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box component="main" sx={mainSx(mdTheme)}>
      <Toolbar />
      <Box sx={{ display: 'flex', height: '100%' }}>
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
          <List component="nav">
            <SubMenu />
          </List>
        </Drawer>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {SwitchReport(workContext.state)}
        </Container>
      </Box>
    </Box>
  )
}

export default function WorkBoard() {
  return <WorkBoardContent />
}
