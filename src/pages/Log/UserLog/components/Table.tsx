import React from 'react'
//material-ui components
import {
  TableBody,
  TableRow,
  Paper,
  Table,
  Box,
  TableContainer,
  TableHead,
  Grid,
  Divider,
} from '@material-ui/core'
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
} from '../Style'
import TablePaginationActions from './Pagination'
import TableSearch from './Search'
import { dateConvert } from '../../../../common/utils'

// interface RowsDataProps {
//   userName: string
//   content: string
//   date: string
// }

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rowsCnt: number
  rows: any
  status: boolean,
  errorMsg: string,
  columns: string[]
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleSearchProps: (start_date: number, end_date: number, keyword: string) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  status,
  page,
  rows,
  columns,
  rowsCnt,
  handleChange,
  handleChangePage,
  handleSearchProps,
}) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  //.......................Time stamp changed function......./
  // const onChangedToTimeFromTimestamp(e:any) => {
  // }
  return (
    <Paper elevation={3} className={classes.root}>
      <p className={classes.tableTitle}>Log History</p>
      <Divider />
      <StyledTableControlBox mt="20px">
        <div className={classes.headerContent}>
          <div className={classes.searchContent}>
            <TableSearch
              handleSearchProps={handleSearchProps}
            />
          </div>
          <div className={classes.paginationContent}>
            <StyledTablePagination
              colSpan={3}
              count={rowsCnt}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onPageChange}
              ActionsComponent={TablePaginationActions}
            />
          </div>
        </div>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                if (column === 'UserId') {
                  return <StyledTableCell style={{ textAlign: 'center' }} key={key}>{column}</StyledTableCell>
                } else
                  return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {
              rows !== undefined
                ? rows.map(
                  (row: any, key: any) => (
                    <TableRow key={key}>
                      <StyledTableCell style={{ textAlign: 'center' }}>{row.UserId}</StyledTableCell>
                      <StyledTableCell>{row.Type}</StyledTableCell>
                      <StyledTableCell>{row.Activity}</StyledTableCell>
                      <StyledTableCell>{row.Description}</StyledTableCell>
                      <StyledTableCell>{row.Status}</StyledTableCell>
                      <StyledTableCell>{dateConvert(row.Timestamp)}</StyledTableCell>
                    </TableRow>
                  ),
                )
                : ''
            }
            {
              status && rows === null ?
                <div>there is no data</div>
                : ""
            }
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
