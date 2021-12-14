import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import bg from 'assets/bg-tweed-pattern.png'
import Login from '../pages/Login'
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bg})`,
    width: '100%',
    minHeight: '100vh',
    display: 'grid',
    margin: 0,
    placeItems: 'center center',
  },
}))


const LandingPage = () => {
  const match = useRouteMatch()
  const classes = useStyles()
alert('asdf ')
  return (
    <div className={classes.container}>
      <CssBaseline />
      <Switch>
        <Redirect exact from="/" to="login" />
        <Route exact path={`${match.url}login`} render={() => <Login />} />
      </Switch>
    </div>
  )
}

export default LandingPage;