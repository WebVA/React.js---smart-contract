import React from 'react'
// @material-ui/core
import Chip from '@material-ui/core/Chip'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import DefaultButton from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

function CustomDataTable({ ...props }: any) {
  const {
    columns,
    rows,
    handleClickOpen,
    setCurrentId,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
    rowsCount,
    deleteBtnClicked,
    enableBtnClicked,
    disableBtnClicked,
  } = props

  // console.log('-------------CustomDataTable-------------')

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        maxHeight: 440,
      },
      red: {
        color: 'red',
      },
      blue: {
        color: 'blue',
      },
      green: {
        color: 'green',
      },
    }),
  )
  const classes = useStyles()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <React.Fragment>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column: any, key: any) => (
                <TableCell key={key} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, key: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                  {columns.map((column: any) => {
                    if (column.id === 'option') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <DefaultButton
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => {
                              setCurrentId(row.id)
                              handleClickOpen()
                            }}
                          >
                            Edit
                          </DefaultButton>
                          |
                          <DefaultButton
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => {
                              deleteBtnClicked(row.id)
                            }}
                          >
                            Delete
                          </DefaultButton>
                          |
                          {row.status ? (
                            <DefaultButton
                              variant="contained"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                disableBtnClicked(Number(row.id))
                              }}
                            >
                              Disable
                            </DefaultButton>
                          ) : (
                            <DefaultButton
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={() => {
                                enableBtnClicked(Number(row.id))
                              }}
                            >
                              Enable
                            </DefaultButton>
                          )}
                        </TableCell>
                      )
                    } else if (column.id === 'cancel') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <DefaultButton
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => {
                              deleteBtnClicked(row.id)
                            }}
                          >
                            Cancel
                          </DefaultButton>
                        </TableCell>
                      )
                    } else if (
                      column.id === 'emailVerified' ||
                      column.id === 'phoneVerified' ||
                      column.id === 'status'
                    ) {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id] ? (
                            <CheckIcon className={classes.green} />
                          ) : (
                            <CloseIcon className={classes.red} />
                          )}
                        </TableCell>
                      )
                    } else if (column.id === 'side') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id] === 1 ? 'Buy' : 'Sell'}
                        </TableCell>
                      )
                    } else if (column.id === 'transType') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id] === 1 ? 'Deposit' : 'Withdraw'}
                        </TableCell>
                      )
                    } else if (column.id === 'role') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id] === 1 ? (
                            <Chip size="small" label="User" color="primary" />
                          ) : (
                            <Chip size="small" label="Admin" color="secondary" />
                          )}
                        </TableCell>
                      )
                    } else {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {row[column.id]}
                        </TableCell>
                      )
                    }
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rowsCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  )
}
export default CustomDataTable
