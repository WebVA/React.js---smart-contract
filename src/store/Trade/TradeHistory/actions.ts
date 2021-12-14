import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTradeHistoryFilterAPI } from '../../api/Trade/TradeHistoryAPI'

const getTradeHistoryFilter = createAsyncThunk('tradehistory/get/filter', async (params: FormData) => {
  const response = await getTradeHistoryFilterAPI(params)
  return response.data.Data
})

export { getTradeHistoryFilter }
