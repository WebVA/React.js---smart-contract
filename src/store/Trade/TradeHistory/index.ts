import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTradeHistoryFilter } from './actions'

import type { tradehistoryState } from './types'
import { TradeHistoryTableType } from '../../../types/Tradehistory'

const PREFIX = 'trade/tradehistory'
const initialState: tradehistoryState = {
  tradeHistoryList: [],
  rowsCount: 0,
}

const setTradeHistoryList = (state: tradehistoryState, tradehistory: TradeHistoryTableType[]) => {
  state.tradeHistoryList = tradehistory
}

export const tradehistoryReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTradeHistoryFilter.fulfilled.type, (state: tradehistoryState, action: PayloadAction<any>) => {
      setTradeHistoryList(state, action.payload)
      state.rowsCount = action.payload.rowscount
    })
  },
})

export { getTradeHistoryFilter }
export default tradehistoryReducer.reducer
