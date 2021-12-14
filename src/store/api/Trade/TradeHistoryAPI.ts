import axios, { REQUEST_API_URL } from '../config'

const PREFIX = 'admin/tradehistory'

export const getTradeHistoryFilterAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/${PREFIX}/filter`, { params })
