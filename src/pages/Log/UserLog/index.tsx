import React, { useEffect } from 'react'

import Table from './components/Table'
import TableInfo from './components/TableInfo'

// import { ChatType } from '../../../constants'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { userLog, totalCount, success, error } from '../../../store/Log/selectors'
import { getUserLogHistory } from '../../../store/Log'

function UserLog() {
  const dispatch = useAppDispatch()
  const columns = ['UserId', 'Type', 'Activity', 'Description', 'Status', 'Date']

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [start_date, setStartDate] = React.useState(0)
  const [end_date, setEndDate] = React.useState(0)
  const [keyword, setKeyword] = React.useState('')

  useEffect(() => {
    const formData = new FormData();
    formData.append("keyword", `${keyword}`)
    formData.append("start_date", `${start_date}`)
    formData.append("end_date", `${end_date}`)
    formData.append("per_page", `${rowsPerPage}`)
    formData.append("cur_page", `${page}`)
    dispatch(getUserLogHistory(formData))
  }, [page, rowsPerPage, keyword, start_date, end_date])

  const tableData = useAppSelector(userLog)
  const totalCnt = useAppSelector(totalCount)
  const status = useAppSelector(success)
  const errorMsg = useAppSelector(error)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleSearchProps = (start_date: number, end_date: number, keyword: string) => {
    setStartDate(start_date)
    setEndDate(end_date)
    setKeyword(keyword)
    setRowsPerPage(10)
    setPage(0)
  }

  return (
    <div style={{ marginTop: 12 }}>
      <Table
        tableInfo={() => TableInfo(totalCnt, rowsPerPage)}
        rowsPerPage={rowsPerPage}
        rowsCnt={totalCnt}
        page={page}
        rows={tableData}
        columns={columns}
        errorMsg={errorMsg}
        status={status}
        // emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        handleSearchProps={handleSearchProps}
      />
    </div>
  )
}

export default UserLog
