import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPublicChatHistory, getSupportChatHistory } from './action'
import type { chatState } from './types'

const PREFIX = 'chat'

const initialState: chatState = {
  publicChatHistoryLists: [],
  supportChatHistoryLists: [],
}

const setPublicChatHistory = (state: chatState, chatHistory: any) => {
  if (chatHistory.Success === true && chatHistory.Data !== null) {
    state.publicChatHistoryLists = chatHistory.Data
  } else {
    state.publicChatHistoryLists = []
  }
}

const setSupportChatHistory = (state: chatState, chatHistory: any) => {
  if (chatHistory.Success === true && chatHistory.Data !== null) {
    state.supportChatHistoryLists = chatHistory.Data
  } else {
    state.supportChatHistoryLists = []
  }
}

export const chatReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updatePublicChatHistory: (state: chatState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.publicChatHistoryLists.push(action.payload)
      }
    },
    updateSupportChatHistory: (state: chatState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.supportChatHistoryLists.push(action.payload)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPublicChatHistory.fulfilled.type, (state: chatState, action: PayloadAction<any>) => {
        setPublicChatHistory(state, action.payload)
      })
      .addCase(getSupportChatHistory.fulfilled.type, (state: chatState, action: PayloadAction<any>) => {
        setSupportChatHistory(state, action.payload)
      })
  },
})

export const { updatePublicChatHistory, updateSupportChatHistory } = chatReducer.actions

export { getPublicChatHistory, getSupportChatHistory }

export default chatReducer.reducer
