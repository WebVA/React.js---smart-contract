import React from 'react'
// import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
// core components
import footerStyle from '../../assets/jss/material-dashboard-react/components/footerStyle'

function Footer({ ...props }: any) {
  const { classes } = props
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.center}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </div>
      </div>
    </footer>
  )
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(footerStyle)(Footer)
