import React from 'react'
import clsx from 'clsx'
// @material-ui/core
import { Divider, OutlinedInput, InputAdornment, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
// customized components
import Button from '../../../components/CustomButtons/Button'
import CustomDataTable from '../../../components/Table1/CustomDataTable'
import { useStyles } from '../Style'
// hook & actions
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getPermissionsFilter, updatePermission, deletePermission } from '../../../store/User/Permissions'
import { selectPermissionList, selectPermissionListRowCount } from '../../../store/User/Permissions/selectors'
import PermissionForm from './PermissionForm'
import { STATUS } from '../../../constants'

interface Column {
  id: 'id' | 'name' | 'description' | 'status' | 'option'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'option', label: 'Option', minWidth: 240 },
]

export function Permissions() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [permissionStatus, setPermissionStatus] = React.useState(0)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [fieldName, setFieldName] = React.useState('')
  const [fieldValue, setFieldValue] = React.useState('')

  const [open, setOpen] = React.useState(false)
  const [currentId, setCurrentId] = React.useState(0)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  //-----------------------DataTable Logic-----------------------------------------
  const rows = useAppSelector(selectPermissionList)
  const rowsCount = useAppSelector(selectPermissionListRowCount)

  const refreshTable = () => {
    dispatch(getPermissionsFilter({}))
  }

  React.useState(() => {
    refreshTable()
  })

  //----------------------Search Bar Logic--------------------------------

  const permissionStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPermissionStatus(event.target.value as number)
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
  //--------------------------Button Functions----------------------------------------
  const deleteBtnClicked = (id: string) => {
    dispatch(deletePermission(id))
  }

  const enableBtnClicked = (id: number) => {
    dispatch(updatePermission({ id: id, status: STATUS.VALID }))
  }

  const disableBtnClicked = (id: number) => {
    dispatch(updatePermission({ id: id, status: STATUS.INVALID }))
  }

  //-----------------------------------------------------------------
  return (
    <React.Fragment>
      <PermissionForm open={open} handleClose={handleClose} currentId={currentId} setCurrentId={setCurrentId} />
      <Grid spacing={3} container>
        <Grid item xs={12}>
          <h2>Permission Management</h2>
          <Divider />
        </Grid>
        <Grid item xs={2} md={4}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.searchBtn}
            onClick={() => {
              setCurrentId(0)
              handleClickOpen()
            }}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={8} md={8} container justifyContent="flex-end">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={permissionStatus}
              onChange={permissionStatusChange}
              label="status"
            >
              <MenuItem value={0}>
                <em>ALL</em>
              </MenuItem>
              <MenuItem value={1}>Enabled</MenuItem>
              <MenuItem value={2}>Disabled</MenuItem>
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
              <MenuItem value="name">Permissionname</MenuItem>
              <MenuItem value="description">Email</MenuItem>
              <MenuItem value="realName">Realname</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
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
              handleClickOpen={handleClickOpen}
              setCurrentId={setCurrentId}
              page={page}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
              rowsCount={rowsCount}
              deleteBtnClicked={deleteBtnClicked}
              enableBtnClicked={enableBtnClicked}
              disableBtnClicked={disableBtnClicked}
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
