import React from 'react'
import clsx from 'clsx'
// @material-ui/core
import { Divider, OutlinedInput, InputAdornment, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
// customized components
import CustomDataTable from '../../../components/Table1/CustomDataTable'
import { useStyles } from '../Style'
// hook & actions
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getDepositWithdrawHistoryFilter } from '../../../store/Trade/DepositWithdrawHistory'
import {
  selectDepositWithdrawHistoryList,
  selectDepositWithdrawHistoryListRowCount,
} from '../../../store/Trade/DepositWithdrawHistory/selectors'

interface Column {
  id:
    | 'date'
    | 'curType'
    | 'transType'
    | 'method'
    | 'userId'
    | 'address'
    | 'amount'
    | 'fee'
    | 'total'
    | 'confirmed'
    | 'status'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'curType', label: 'Currency/Token', minWidth: 100 },
  { id: 'transType', label: 'Type', minWidth: 150 },
  { id: 'method', label: 'Method', minWidth: 170 },
  { id: 'userId', label: 'UserId', minWidth: 100 },
  { id: 'address', label: 'Address', minWidth: 170 },
  { id: 'amount', label: 'Amount', minWidth: 180 },
  { id: 'fee', label: 'Fee', minWidth: 180 },
  { id: 'total', label: 'Total', minWidth: 180 },
  { id: 'confirmed', label: 'Confirmed', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
]

export function DepositWithdrawHistory() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [searchType, setSearchType] = React.useState(0)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [fieldName, setFieldName] = React.useState('')
  const [fieldValue, setFieldValue] = React.useState('')
  const [searchFromDate, setSearchFromDate] = React.useState('2017-05-24T10:30')
  const [searchToDate, setSearchToDate] = React.useState('2017-05-24T10:30')

  //-----------------------DataTable Logic-----------------------------------------
  const rows = useAppSelector(selectDepositWithdrawHistoryList)
  const rowsCount = useAppSelector(selectDepositWithdrawHistoryListRowCount)

  const refreshTable = () => {
    console.log('------------refresh-------------')
    const formData = new FormData()
    formData.append('transType', String(searchType))
    formData.append(fieldName, fieldValue)
    formData.append('fromDate', searchFromDate)
    formData.append('toDate', searchToDate)
    formData.append('rowsPerPage', String(rowsPerPage))
    formData.append('page', String(page))
    dispatch(getDepositWithdrawHistoryFilter(formData))
  }

  React.useState(() => {
    refreshTable()
  })

  //----------------------Search Bar Logic--------------------------------

  const searchFromDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearchFromDate(event.target.value as string)
    refreshTable()
  }

  const searchToDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearchToDate(event.target.value as string)
    refreshTable()
  }

  const searchTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearchType(event.target.value as number)
    refreshTable()
  }

  const fieldNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFieldName(event.target.value as string)
    refreshTable()
  }

  const fieldValueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFieldValue(event.target.value as string)
    refreshTable()
  }
  //-----------------------------------------------------------------
  return (
    <React.Fragment>
      <Grid spacing={3} container>
        <Grid item xs={12}>
          <h2>Deposit/Withdraw History</h2>
          <Divider />
        </Grid>
        <Grid item xs={5} md={5} container justifyContent="flex-start">
          <TextField
            id="searchFromDate"
            label="From Date"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.datepicker}
            value={searchFromDate}
            onChange={searchFromDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="searchEndDate"
            label="To Date"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.datepicker}
            value={searchToDate}
            onChange={searchToDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={7} md={7} container justifyContent="flex-end">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={searchType}
              onChange={searchTypeChange}
              label="type"
            >
              <MenuItem value={0}>
                <em>ALL</em>
              </MenuItem>
              <MenuItem value={1}>Deposit</MenuItem>
              <MenuItem value={2}>Withdraw</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Field</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={fieldName}
              onChange={fieldNameChange}
              label="field"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value="curType">Currency/Token</MenuItem>
              <MenuItem value="transType">Type</MenuItem>
              <MenuItem value="method">Method</MenuItem>
              <MenuItem value="userId">UserId</MenuItem>
              <MenuItem value="address">Address</MenuItem>
              <MenuItem value="amount">Amount</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={fieldValue}
              onChange={fieldValueChange}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 400, width: '100%' }}>
            <CustomDataTable
              columns={columns}
              rows={rows}
              page={page}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
              rowsCount={rowsCount}
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
