import type { RootState } from '../../store'

// Other code such as selectors can use the imported `RootState` type   openorderList
export const selectTradehistorylist = (state: RootState) => state.tradehistory.tradeHistoryList

export const selectTradehistoryRowscount = (state: RootState) => state.tradehistory.rowsCount
