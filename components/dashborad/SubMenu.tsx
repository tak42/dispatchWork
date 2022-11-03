import AssignmentIcon from '@mui/icons-material/Assignment'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import React from 'react'

const ListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        leaders menu
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="周知" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="チーム管理" />
      </ListItemButton>
    </React.Fragment>
  )
}

export default function SubMenu() {
  return <ListItems />
}
