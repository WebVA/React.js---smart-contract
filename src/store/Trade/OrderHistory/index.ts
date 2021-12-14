import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getOpenOrdersFilter } from './actions'

import type { orderHistoryState } from './types'
import { OpenOrderTableType } from '../../../types/Orderhistory'

const PREFIX = 'trade/orderHsitory'
const initialState: orderHistoryState = {
  orderHistoryList: [],
  rowsCount: 0,
}

const setorderHistoryList = (state: orderHistoryState, openorders: OpenOrderTableType[]) => {
  state.orderHistoryList = openorders
}

export const openordersReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOpenOrdersFilter.fulfilled.type, (state: orderHistoryState, action: PayloadAction<any>) => {
      setorderHistoryList(state, action.payload)
      state.rowsCount = action.payload.rowscount
    })
  },
})

export { getOpenOrdersFilter }
export default openordersReducer.reducer
