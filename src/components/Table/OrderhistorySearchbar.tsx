import React from 'react'
// @material-ui/core
import { Divider, Grid } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import TextField from '@material-ui/core/TextField'

// customized components
import Button from '../CustomButtons/Button'
import { useStyles } from '../../pages/User/Style'
// hook & actions
import { useAppDispatch } from '../../store/hooks'
import { getOpenOrdersFilter } from '../../store/Trade/OrderHistory'
import dateFormat from 'dateformat'
export function OrderhistorySearchbar() {
  //   const { tabNumber } = props

  //   console.log(tabNumber)
  const classes = useStyles()
  const dispatch = useAppDispatch()

  // ---------user_id onchange-----------
  const [user_id, setUserId] = React.useState('')
  const handleUserId = (e: any) => {
    setUserId(e)
  }

  // ----------order_side onchange-----
  const [order_side, setSide] = React.useState('')
  const sideChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSide(event.target.value as string)
  }

  // ----pair onchanges-----
  const [pair, setPair] = React.useState('')
  const pairChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPair(event.target.value as string)
  }

  // -------order_status-----
  const [order_status, setOrderStatus] = React.useState('')
  const handleOrderStatus = (e: any) => {
    setOrderStatus(e)
  }

  // const [type, setType] = React.useState('')
  // const typeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setType(event.target.value as string)
  // }

  const [start_date, setStartDate] = React.useState(0)
  const handleStartDate = (e: any) => {
    // setStartDate(e)
    const startTimestamp = Date.parse(dateFormat(e)) / 1000
    setStartDate(startTimestamp)
  }

  const [end_date, setEndDate] = React.useState(0)
  const handleEndDate = (e: any) => {
    const endTimestamp = Date.parse(dateFormat(e)) / 1000
    setEndDate(endTimestamp)
  }

  const handleOrderSumbit = (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('user_id', user_id)
    // formData.append('order_side', order_side)
    // formData.append('pair', pair)
    // formData.append('order_status', order_status)
    // formData.append('start_date', start_date.toString())
    // formData.append('end_date', end_date.toString())

    dispatch(getOpenOrdersFilter(formData))
  }

  return (
    <React.Fragment>
      {/* <h2>thisis OrderhistorySearchbar</h2> */}
      <form onSubmit={handleOrderSumbit}>
        <Grid spacing={3} container>
          <Grid item xs={12} sm={12} md={2}>
            <div className={classes.container}>
              <TextField
                id="date"
                label="Star_time"
                type="date"
                // defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  handleStartDate(e.target.value)
                }}
                value={start_date}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <div className={classes.container}>
              <TextField
                id="date"
                label="End_time"
                type="date"
                // defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  handleEndDate(e.target.value)
                }}
                value={end_date}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2}></Grid>
          <Grid item xs={12} sm={12} md={2}></Grid>
          <Grid item xs={12} sm={12} md={2}></Grid>
          <Grid item xs={12} sm={12} md={2}></Grid>
          <Divider />
          <Grid item xs={12} sm={12} md={3}>
            <div className={classes.userField}>
              <TextField
                id="outlined-basic"
                size="small"
                label="User_ID"
                onChange={(e) => {
                  handleUserId(e.target.value)
                }}
                variant="outlined"
                value={user_id}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Side</InputLabel>
              <Select
                className={classes.select}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={order_side}
                label="field"
                onChange={sideChange}
              >
                <MenuItem value="0">Buy</MenuItem>
                <MenuItem value="1">Sell</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Pair</InputLabel>
              <Select
                className={classes.select}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={pair}
                label="field"
                onChange={pairChange}
              >
                <MenuItem value="BTC/USDT">BTC/USDT</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
              <Select
                className={classes.select}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={order_status}
                label="field"
                onChange={handleOrderStatus}
              >
                <MenuItem value="0">All</MenuItem>
                <MenuItem value="1">Ordered</MenuItem>
                <MenuItem value="2">Finished</MenuItem>
                <MenuItem value="3">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <Button className={classes.searchBtn} type="submit" style={{ backgroundColor: '#00acc1' }} spacing={1}>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}
