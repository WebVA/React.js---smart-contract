import React, { useEffect } from 'react'
import axios from 'axios'

import { Menu, MenuItem, Paper, TextareaAutosize, Button, FormControl, FormHelperText } from '@material-ui/core'
import Table from './components/Table'
import TableInfo from './components/TableInfo'

// import { ChatType } from '../../../constants'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { notification } from '../../store/notification/selectors'
import { getNotification } from '../../store/notification'
import { REQUEST_API_URL } from '../../store/api/config'
import { NotificationType } from '../../constants'
import { useStyles } from './Style'

function Notification() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const columns = ['ID', 'Content', 'Status', 'Time', 'Option']

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)

  useEffect(() => {
    const getPublicChatHistories = () => {
      const formData = new FormData()
      formData.append('status', NotificationType.NOTIFICATION_ALL.toString())

      dispatch(getNotification(formData))
    }
    getPublicChatHistories()
  }, [NotificationType.NOTIFICATION_ALL])

  const notificationData = useAppSelector(notification)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const rowsCnt = notificationData.length

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const [status, setStatus] = React.useState('1')

  const handleStatus = (value: any) => {
    setStatus(value)
    setAnchorEl(null)
  }

  const [content, setContent] = React.useState('')
  const handleContent = (e: string) => {
    setContent(e)
  }

  const handleSave = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('message', content)

    const res = await axios.post(`${REQUEST_API_URL}/admin/notification/add`, formData)
    setContent('')
    console.log(res)
  }

  return (
    <div style={{ marginTop: 12, display: 'flex' }}>
      <div style={{ width: '70%' }}>
        <Table
          tableInfo={() => TableInfo(rowsCnt, rowsPerPage)}
          rowsPerPage={rowsPerPage}
          rowsCnt={rowsCnt}
          page={page}
          rows={notificationData}
          columns={columns}
          // emptyRows={emptyRows}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
        />
      </div>
      <div style={{ width: '28%', marginLeft: '15px' }}>
        <Paper elevation={3} className={classes.root}>
          <form onSubmit={handleSave} style={{ display: 'line-block' }}>
            <div>
              <FormControl>
                <FormHelperText style={{ fontSize: '14px' }}>Status</FormHelperText>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleClick}
                  color="primary"
                  className={classes.saveBtn}
                >
                  {status === '1' ? 'Active' : 'InActive'}
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleStatus}>
                  <MenuItem onClick={() => handleStatus('1')}>Active</MenuItem>
                  <MenuItem onClick={() => handleStatus('2')}>InActive</MenuItem>
                </Menu>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormHelperText style={{ fontSize: '14px' }}>Content</FormHelperText>
                <TextareaAutosize
                  onChange={(e) => handleContent(e.target.value)}
                  minRows="5"
                  value={content}
                  className={classes.contentField}
                />
              </FormControl>
            </div>
            <div style={{ marginTop: '16px' }}>
              <Button variant="contained" type="submit" color="primary" size="small" className={classes.saveBtn}>
                Save
              </Button>
              <Button variant="contained" color="default" size="small" className={classes.cancelBtn}>
                Cancel
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  )
}

export default Notification
