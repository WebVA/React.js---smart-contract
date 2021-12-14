import axios from 'axios'
import { REQUEST_API_URL } from '../config'

const PREFIX = 'userlogo'

export const UserLogAPI = async () => axios.post(`${REQUEST_API_URL}/v1/${PREFIX}`)
