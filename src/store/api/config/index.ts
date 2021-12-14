import axios from 'axios'
export const API_URL = 'http://localhost:9090'
export const REQUEST_API_URL = `${API_URL}/api/v1`

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
export default axios
