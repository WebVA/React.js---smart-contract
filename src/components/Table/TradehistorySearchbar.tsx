import React from 'react'

// @material-ui/core
import { Grid } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

// customized components
import Button from '../CustomButtons/Button'
import { useStyles } from '../../pages/User/Style'
import dateFormat from 'dateformat'

// hook & actions
import { useAppDispatch } from '../../store/hooks'
import { getTradeHistoryFilter } from '../../store/Trade/TradeHistory'

export function TradehistorySearchbar({ ...props }: any) {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  // --------Date changes----------
  const [start_date, setStartDate] = React.useState(0)
  const handleStartDate = (e: any) => {
    console.log('dateformatest', dateFormat(e))
    const startTimestamp = Date.parse(dateFormat(e)) / 1000
    console.log('this is startdate test', startTimestamp)
    setStartDate(startTimestamp)
  }
  // ------
  const [end_date, setEndDate] = React.useState(0)
  const handleEndDate = (e: any) => {
    const endTimestamp = Date.parse(dateFormat(e)) / 1000
    setEndDate(endTimestamp)
  }

  // -----Pair select onchanges-----
  const [pair, setPair] = React.useState('')
  const pairChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPair(event.target.value as string)
  }

  // ---------User_Id field-------
  const [user_id, setUserId] = React.useState('')
  const handleUserId = (e: any) => {
    setUserId(e.target.value)
  }

  // ---------Fucntion-----
  // const Searchfun_tradehistory = (e: any) => {
  //   e.preventDefault()
  //   const formData = new FormData()
  //   formData.append('user_id', user_id)
  //   formData.append('pair', pair)
  //   formData.append('start_date', start_date.toString())
  //   formData.append('end_date', end_date.toString())
  //   // console.log('Hey, after, searchButton', formData.getBuffer())

  //   dispatch(getTradeHistoryFilter(formData))
  // }
  React.useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', user_id)
    formData.append('pair', pair)
    formData.append('start_date', start_date.toString())
    formData.append('end_date', end_date.toString())
    // console.log('Hey, after, searchButton', formData.getBuffer())

    dispatch(getTradeHistoryFilter(formData))
  }, [user_id, pair])

  return (
    <React.Fragment>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={12} md={2}>
          <div className={classes.container}>
            <TextField
              id="date"
              label="Start_Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleStartDate(e.target.value)
              }}
              // defaultValue={dd}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={2}>
          <div className={classes.container}>
            <TextField
              id="date"
              label="End_Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleEndDate(e.target.value)
              }}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <div className={classes.userField}>
            <TextField
              id="outlined-basic"
              label="User_ID"
              variant="outlined"
              size="small"
              value={user_id}
              onChange={handleUserId}
            />
          </div>
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
              <MenuItem value="userName"> ZNX/USDT</MenuItem>
              <MenuItem value="email"> BTC/USDT</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={2}>
            <Button className={classes.searchBtn} style={{ backgroundColor: '#00acc1' }} type="submit" spacing={1}>
              Search
            </Button>
          </Grid> */}
      </Grid>
    </React.Fragment>
  )
}
