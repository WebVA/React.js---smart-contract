import type { RootState } from '../../store'

// Other code such as selectors can use the imported `RootState` type   openorderList
export const selectOrderhistorylist = (state: RootState) => state.orderHistory.orderHistoryList
