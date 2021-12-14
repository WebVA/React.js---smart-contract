import React from 'react'
import classNames from 'classnames'
// import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { AppBar, Tabs, Tab, Grid } from '@material-ui/core'
// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard'
import ReceiptIcon from '@material-ui/icons/Receipt'
import PersonIcon from '@material-ui/icons/Person'
import ListIcon from '@material-ui/icons/List'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
// core components
// import AdminNavbarLinks from './AdminNavbarLinks'

import headerStyle from '../../assets/jss/material-dashboard-react/components/headerStyle'
import { useAppDispatch } from '../../store/hooks'
import { selectTabAction } from '../../store/tab'

function Navbar({ ...props }: any) {
  const { classes, color } = props
  const appBarClasses = classNames({
    [' ' + classes[color]]: color,
  })

  const [tabValue, setTabValue] = React.useState(0)
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
    dispatch(selectTabAction(newValue))
  }

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="inherit"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Dashboard" icon={<DashboardIcon />} />
            <Tab label="User" icon={<PersonIcon />} />
            <Tab label="Trade" icon={<EqualizerIcon />} />
            <Tab label="Finance" icon={<ListIcon />} />
            <Tab label="LOG" icon={<ReceiptIcon />} />
            <Tab label="Chat" icon={<ChatIcon />} />
            <Tab label="Notification" icon={<NotificationsActiveIcon />} />
          </Tabs>
        </Grid>
        {/* <Grid item xs={3}>
          <Toolbar className={classes.container}>
            <Hidden smDown={true} implementation="css">
              <AdminNavbarLinks />
            </Hidden>
            <Hidden mdUp={true} implementation="css">
              <IconButton color="inherit" aria-label="open drawer" onClick={props.handleDrawerToggle}>
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Grid> */}
      </Grid>
    </AppBar>
  )
}

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
//   color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
// };

export default withStyles(headerStyle)(Navbar)
