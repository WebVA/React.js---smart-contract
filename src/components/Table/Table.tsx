import React from 'react'
//material-ui components
import { TableBody, TableRow, Paper, Table, Box, TableContainer, TableHead } from '@material-ui/core'
//style
import {
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledTablePagination,
  StyledRowsPerPageBox,
  StyledNativeSelect,
  BootstrapInput,
  useStyles,
} from './Style'
import TablePaginationActions from './Pagination'
import { TradehistorySearchbar } from './TradehistorySearchbar'
import { OrderhistorySearchbar } from './OrderhistorySearchbar'
import { dateConvert } from '../../common/utils'

function CustomizedTable({ ...props }: any) {
  const { columns, rows, rowsPerPage, page, rowsCnt, handleChange, handleChangePage, tabNum } = props

  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }
  // const tabNumber = tabNum

  return (
    <Paper elevation={3} className={classes.root}>
      <StyledTableControlBox mb="20px" style={{ padding: '20px 20px' }}>
        {/* <Box>{tableInfo}</Box> */}
        {tabNum === 1 ? <TradehistorySearchbar /> : <OrderhistorySearchbar />}
      </StyledTableControlBox>

      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                return (
                  <StyledTableCell key={key} style={{ minWidth: column.minWidth }} align={column.align}>
                    {column.label}
                  </StyledTableCell>
                )
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows !== undefined
              ? (rowsPerPage > 0 ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
                  (row: any) => (
                    <TableRow key={row.id}>
                      {columns.map((column: any) => {
                        if (column.id === 'Cancel_action') {
                          return (
                            <StyledTableCell key={column.id}>
                              <button className={classes.btn}> Cancel </button>
                            </StyledTableCell>
                          )
                        } else if (column.id === 'side') {
                          return (
                            <StyledTableCell key={column.id}>{row[column.id] === 0 ? 'Buy' : 'Sell'}</StyledTableCell>
                          )
                        } else if (column.id === 'Side') {
                          return (
                            <StyledTableCell key={column.id}>{row[column.id] === 0 ? 'Buy' : 'Sell'}</StyledTableCell>
                          )
                        } else if (column.id === 'status') {
                          return (
                            <StyledTableCell key={column.id}>
                              {row[column.id] === 0
                                ? 'All'
                                : row[column.id] === 1
                                ? 'Ordered'
                                : row[column.id] === 2
                                ? 'Finished'
                                : 'Cancelled'}
                            </StyledTableCell>
                          )
                        } else if (column.id === 'created_at') {
                          return <StyledTableCell key={column.id}>{dateConvert(row[column.id])}</StyledTableCell>
                        } else if (column.id === 'finished_at') {
                          return <StyledTableCell key={column.id}>{dateConvert(row[column.id])}</StyledTableCell>
                        } else if (column.id === 'Timestamp') {
                          return <StyledTableCell key={column.id}>{dateConvert(row[column.id])}</StyledTableCell>
                        } else {
                          return <StyledTableCell key={column.id}>{row[column.id]}</StyledTableCell>
                        }
                      })}
                    </TableRow>
                  ),
                )
              : ''}
          </TableBody>
        </Table>
      </TableContainer>

      <StyledTableControlBox my="12px">
        <Box>
          <StyledRowsPerPageBox>
            Show
            <StyledNativeSelect
              id="demo-customized-select-native"
              value={rowsPerPage}
              onChange={onSelectChange}
              input={<BootstrapInput />}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </StyledNativeSelect>
            Records
          </StyledRowsPerPageBox>
        </Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={rowsCnt}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={onPageChange}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </StyledTableControlBox>
    </Paper>
  )
}

export default CustomizedTable
