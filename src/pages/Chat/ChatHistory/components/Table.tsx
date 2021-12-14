import React from 'react'
//material-ui components
import {
  TableBody,
  TableRow,
  Paper,
  Table,
  Box,
  TableContainer,
  Typography,
  Checkbox,
  TableHead,
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
  columns: string[]
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  rowsCnt,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  const [allCheck, setAllCheck] = React.useState(false)
  const handleAllCheck = (e: boolean) => {
    setAllCheck(e)
  }

  return (
    <Paper elevation={3} className={classes.root}>
      <StyledTableControlBox mb="20px">
        <button className={classes.btn}>Delete</button>
        <Box>{tableInfo}</Box>
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
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell style={{ width: '30px' }}>
                <Checkbox
                  color="primary"
                  onChange={(e) => {
                    handleAllCheck(e.target.checked)
                  }}
                />
              </StyledTableCell>
              {columns.map((column: any, key: any) => {
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {
              /*(rowsPerPage > 0 ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows)*/
              rows !== undefined
                ? (rowsPerPage > 0 ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
                    (row: any, key: any) => (
                      <TableRow key={key}>
                        <StyledTableCell>
                          <Typography>
                            <Checkbox color="primary" checked={allCheck} />
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>{key + 1}</StyledTableCell>
                        <StyledTableCell>{row.UserId}</StyledTableCell>
                        <StyledTableCell>{row.Message}</StyledTableCell>
                        <StyledTableCell>2021-11-24 12:23:03</StyledTableCell>
                      </TableRow>
                    ),
                  )
                : ''
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
