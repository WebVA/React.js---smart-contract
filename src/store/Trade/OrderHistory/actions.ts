import { createAsyncThunk } from '@reduxjs/toolkit'
import { getOpenOrdersFilterAPI } from '../../api/Trade/OpenOrdersAPI'

const getOpenOrdersFilter = createAsyncThunk('openorders/filter', async (params: FormData) => {
  const response = await getOpenOrdersFilterAPI(params)
  return response.data.Data
})

export { getOpenOrdersFilter }
