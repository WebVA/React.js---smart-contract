import React from 'react'
import {
  Typography,
  Button,
  Container,
  CssBaseline,
  Avatar,
  TextField,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
  MuiThemeProvider,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useStyles } from './Style'
import { Theme } from './Theme'

function Login() {
  const classes = useStyles();
  alert('asdf');
  return (
    <React.Fragment>
      <MuiThemeProvider theme={Theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h5" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="primary"
              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={}
              >
                Sign In
              </Button>
              <Grid container alignItems="center">
                <Grid item xs={12} sm container justifyContent="center">
                  <Link href="#" variant="body2" color="textPrimary">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={12} sm container justifyContent="center">
                  <FormControlLabel control={<Checkbox value="remember" color="secondary" />} label="Remember me" />
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default Login;
