import React from 'react'
import Table from '../../../components/Table/Table'
import TableInfo from '../../../components/Table/TableInfo'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'

// ---------import actions-------
import { getTradeHistoryFilter } from '../../../store/Trade/TradeHistory'

// ----------import selectors------------
import { selectTradehistorylist } from '../../../store/Trade/TradeHistory/selectors'
import { selectTradehistoryRowscount } from '../../../store/Trade/TradeHistory/selectors'

interface Column {
  id: 'OrderId' | 'UserId' | 'Pair' | 'Side' | 'Price' | 'Excuted' | 'Fee' | 'Timestamp'
  label: string
  minWidth?: number
  align?: 'right'
}

const columns: Column[] = [
  { id: 'OrderId', label: 'OrderId', minWidth: 100 },
  { id: 'UserId', label: 'UserId', minWidth: 100 },
  { id: 'Pair', label: 'Pair', minWidth: 100 },
  { id: 'Side', label: 'Side', minWidth: 100 },
  { id: 'Price', label: 'Price', minWidth: 100 },
  { id: 'Excuted', label: 'Excuted', minWidth: 170 },
  { id: 'Fee', label: 'Fee', minWidth: 180 },
  { id: 'Timestamp', label: 'Timestamp', minWidth: 150 },
]

export function TradeHistory() {
  const dispatch = useAppDispatch()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  // ----database logic----
  const rows = useAppSelector(selectTradehistorylist)
  console.log(rows)
  const rowsCnt = useAppSelector(selectTradehistoryRowscount)

  const tabNum = 1

  // React.useEffect(() => {
  //   const formData = new FormData()
  //   formData.append('user_id', '')
  //   formData.append('pair', '')
  //   formData.append('start_date', '')
  //   formData.append('end_date', '')

  //   dispatch(getTradeHistoryFilter(formData))
  // }, [dispatch])

  return (
    <div style={{ marginTop: 12 }}>
      <Table
        tableInfo={() => TableInfo(rowsCnt, rowsPerPage)}
        rowsPerPage={rowsPerPage}
        rowsCnt={rowsCnt}
        page={page}
        rows={rows}
        columns={columns}
        tabNum={tabNum}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}
