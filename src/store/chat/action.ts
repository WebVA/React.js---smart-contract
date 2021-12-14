import { createAsyncThunk } from '@reduxjs/toolkit'
import { publicChatAPI, supportChatAPI } from '../api/chat'

const getPublicChatHistory = createAsyncThunk('publicChat/get/history', async () => {
  const response = await publicChatAPI()
  return response.data
})

const getSupportChatHistory = createAsyncThunk('supportChat/get/history', async (params: FormData) => {
  const response = await supportChatAPI(params)
  return response.data
})

export { getPublicChatHistory, getSupportChatHistory }
