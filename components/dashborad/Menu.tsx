import AssignmentIcon from '@mui/icons-material/Assignment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LayersIcon from '@mui/icons-material/Layers'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import React, { useContext } from 'react'
import type { Work } from '../../src/work/technicalEmployee'
import { WorkState } from '../../src/globalState/workState'

export const EmployeeMenus: {
  title: string
  work: Work
  icon: JSX.Element
}[] = [
  {
    title: 'Dashboard',
    work: '',
    icon: <DashboardIcon />,
  },
  {
    title: '勤怠管理',
    work: 'attendance',
    icon: <ShoppingCartIcon />,
  },
  {
    title: '報告書作成',
    work: 'reportWriting',
    icon: <AssignmentIcon />,
  },
  {
    title: '案件共有',
    work: 'caseInformationSharing',
    icon: <PeopleIcon />,
  },
  {
    title: 'Excel出力',
    work: 'excelOut',
    icon: <LayersIcon />,
  },
]

const ListItems = () => {
  const workContext = useContext(WorkState)

  const btnClick = (work: Work) => {
    workContext.setWork(work)
  }
  return (
    <React.Fragment>
      {EmployeeMenus.map((menu, idx) => {
        return (
          <ListItemButton onClick={() => btnClick(menu.work)} key={idx}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
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
