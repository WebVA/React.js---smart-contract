import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './User/Users'
import adminsReducer from './User/Admins'
import signinlogReducer from './User/SignInLog'
import permissionsReducer from './User/Permissions'

import tradehistoryReducer from './Trade/TradeHistory'
import orderHistoryReducer from './Trade/OrderHistory'
import depositwithdrawhistoryReducer from './Trade/DepositWithdrawHistory'
import chatReducer from './chat'
import  logReducer  from './Log'
import tabReducer from './tab'
import notificationReducer from './notification'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    admins: adminsReducer,
    signinlogs: signinlogReducer,
    permissions: permissionsReducer,
    orderHistory: orderHistoryReducer,
    depositwithdrawhistory: depositwithdrawhistoryReducer,
    chat: chatReducer,
    log: logReducer,
    tab: tabReducer,
    tradehistory: tradehistoryReducer,
    notification: notificationReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
