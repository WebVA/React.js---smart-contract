import React, { useEffect } from 'react'

import Table from './components/Table'
import TableInfo from './components/TableInfo'

// import { ChatType } from '../../../constants'

import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { publicChat } from '../../../store/chat/selectors'
import { getPublicChatHistory } from '../../../store/chat'

function ChatHistory() {
  const dispatch = useAppDispatch()
  const columns = ['ID', 'UserName', 'Content', 'Time ']

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  // const [userId, setUserId] = React.useState('5')

  useEffect(() => {
    const getPublicChatHistories = () => {
      dispatch(getPublicChatHistory())
    }
    getPublicChatHistories()
  }, [dispatch])

  const chatData = useAppSelector(publicChat)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const rowsCnt = chatData.length

  return (
    <div style={{ marginTop: 12 }}>
      <Table
        tableInfo={() => TableInfo(rowsCnt, rowsPerPage)}
        rowsPerPage={rowsPerPage}
        rowsCnt={rowsCnt}
        page={page}
        rows={chatData}
        columns={columns}
        // emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

export default ChatHistory
