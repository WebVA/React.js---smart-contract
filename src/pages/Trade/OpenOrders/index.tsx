import React from 'react'

// customized components
import Table from '../../../components/Table/Table'
import TableInfo from '../../../components/Table/TableInfo'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

// -------import actions----------
import { getOpenOrdersFilter } from '../../../store/Trade/OrderHistory'

// ----------import selectors----------
import { selectOrderhistorylist } from '../../../store/Trade/OrderHistory/selectors'

interface Column {
  id:
    | 'id'
    | 'type'
    | 'side'
    | 'amount'
    | 'filled'
    | 'created_at'
    | 'finished_at'
    | 'pair'
    | 'price'
    | 'userid'
    | 'status'
  label: string
  minWidth?: number
  align?: 'right'
}

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'userid', label: 'User_id', minWidth: 100 },
  { id: 'pair', label: 'Pair', minWidth: 150 },
  { id: 'price', label: 'Price', minWidth: 150 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
  { id: 'filled', label: 'Filled', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 100 },
  { id: 'side', label: 'Side', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 150 },
  { id: 'created_at', label: 'Created_at', minWidth: 170 },
  { id: 'finished_at', label: 'Finished_at', minWidth: 180 },
]

export function OpenOrders() {
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

  React.useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', '2')
    formData.append('order_side', '')
    formData.append('pair', '')
    formData.append('order_status', '')
    formData.append('start_date', '')
    formData.append('end_date', '')

    dispatch(getOpenOrdersFilter(formData))
  }, [dispatch])

  // ----database logic----
  const rows = useAppSelector(selectOrderhistorylist)
  console.log(rows)
  const rowsCnt = 20
  const tabNum = 2

  return (
    <div style={{ marginTop: 12 }}>
      <Table
        tableInfo={() => TableInfo(rowsCnt, rowsPerPage)}
        rowsPerPage={rowsPerPage}
        rowsCnt={rowsCnt}
        page={page}
        rows={rows}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        tabNum={tabNum}
      />
    </div>
  )
}
