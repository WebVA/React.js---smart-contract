import axios from 'axios'
import { REQUEST_API_URL } from '../config'

const PREFIX = 'admin'

export const UserLogAPI = async (params:any) => axios.post(`${REQUEST_API_URL}/${PREFIX}/logs/history`,params)
