import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TableInfo = (totaltxns: any, rowsPerPage: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>A total of {totaltxns} txns found</Typography>
      <Typography style={{ color: '#77838f', fontSize: '12px' }}>
        (Showing the last {rowsPerPage} records only)
      </Typography>
    </Box>
  )
}

export default TableInfo
