import React from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import SearchBar from 'material-ui-search-bar'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// import { useAppSelector } from "../../../store/hooks";
// import { selectBalance } from "../../../store/finance/selectors";
import { REQUEST_API_URL } from '../../config/config'
import { FiatType } from '../../config/constants'

import useStyles from './styles'

// interface Txn {
//   BlockNumber: number;
//   Timestamp: number;
//   From: string;
//   To: string;
//   TxHash: string;
//   FloatValue: number;
//   Symbol: string;
// }

export default function FiatDeposit(props: any) {
  const classes = useStyles()
  // const address = "bc1qr908fxwnmv5d3u4e23z4wz2qfsh52qda7jv0st";
  // const [rows, setRows] = React.useState<food[]>(originalRows);
  const [searched, setSearched] = React.useState<string>('')
  const [data, setData] = React.useState([])
  const [txnHis, setTxnHis] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const requestSearch: any = (searchedVal: string) => {
    if (txnHis) {
      const filteredRows = txnHis.filter((row: any) => {
        return row.Status.toLowerCase().includes(searchedVal.toLowerCase())
      })
      setData(filteredRows)
    }
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  React.useEffect(() => {
    const formData = new FormData()
    formData.append('type', FiatType.FIAT_DEPOSIT)
    axios.post(`${REQUEST_API_URL}/admin/fiat/filter`, formData).then((res) => {
      setTxnHis(res.data.Data)
      setData(res.data.Data)
    })
  }, [])
  return (
    <div>
      <Paper className={classes.cdephis} variant="outlined">
        <span style={{ fontSize: '20px' }}>Fiat Deposit</span>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          className={classes.search}
        />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className={classes.thead}>
                <TableCell align="center" className={classes.thtitle}>
                  BatchID
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  TxnID
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Amount
                </TableCell>{' '}
                <TableCell align="center" className={classes.thtitle}>
                  Unit
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Confirmed
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Fee
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Status
                </TableCell>
                <TableCell align="center" className={classes.thtitle}>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, key) => (
                  <TableRow key={key} hover>
                    <TableCell className={classes.tbody}>{row.BatchId}</TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      <div className={classes.tbOverflow}>{row.TransactionId}</div>
                    </TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      {row.Amount}
                    </TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      <div className={classes.tbOverflow}>{row.CurrencyCode}</div>
                    </TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      <div className={classes.tbOverflow}>{row.NetAmount}</div>
                    </TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      {row.Fee}
                    </TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      {row.Status}
                    </TableCell>
                    <TableCell align="center" className={classes.tbody}>
                      {new Date(row.Timestamp * 1000).toLocaleString('en-GB')}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data === null ? 0 : data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
