import Link from '@mui/material/Link'
import { makeStyles } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'
import Title from './Title'

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

const useStyles: any = makeStyles({
  depositcontext: {
    flex: 1,
  },
})

export default function Deposits() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  )
}
