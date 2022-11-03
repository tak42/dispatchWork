import AssignmentIcon from '@mui/icons-material/Assignment'
import BarChartIcon from '@mui/icons-material/BarChart'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LayersIcon from '@mui/icons-material/Layers'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import React, { useContext } from 'react'
import { EmployeeMenus } from '../../src/work/technicalEmployee'
import type { Work, Icon } from '../../src/work/technicalEmployee'
import { WorkState } from '../../src/globalState/workState'

type IconList = {
  type: Icon
  tsx: JSX.Element
}[]

const tsxIconList: IconList = [
  {
    type: 'Assignment',
    tsx: <AssignmentIcon />,
  },
  {
    type: 'BarChart',
    tsx: <BarChartIcon />,
  },
  {
    type: 'Dashboard',
    tsx: <DashboardIcon />,
  },
  {
    type: 'Layers',
    tsx: <LayersIcon />,
  },
  {
    type: 'People',
    tsx: <PeopleIcon />,
  },
  {
    type: 'ShoppingCart',
    tsx: <ShoppingCartIcon />,
  },
]

const ListItems = () => {
  const SearchIcon = (props: { icon: Icon }) => {
    const findIcon = tsxIconList.find((item) => item.type === props.icon)
    if (findIcon === undefined) return <DashboardIcon />
    return findIcon.tsx
  }

  const workContext = useContext(WorkState)

  const btnClick = (work: Work) => {
    console.log(work + ' btn clicked!')
    workContext.setWork(work)
  }
  return (
    <React.Fragment>
      {EmployeeMenus.map((menu) => {
        return (
          <ListItemButton onClick={() => btnClick(menu.work)}>
            <ListItemIcon>
              <SearchIcon icon={menu.icon} />
            </ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItemButton>
        )
      })}
    </React.Fragment>
  )
}

export default function Menu() {
  return <ListItems />
}
