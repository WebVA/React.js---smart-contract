import axios, { REQUEST_API_URL } from '../config'

const PREFIX = 'admin/orders'

export const getOpenOrdersFilterAPI = async (params: FormData) =>
  axios.post('http://localhost:9090/api/v1/admin/orders/filter', { params })

// export const cancelOpenOrderAPI = async (id: string) => axios.delete(`${REQUEST_API_URL}/${PREFIX}/${id}`)
