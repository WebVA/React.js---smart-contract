/** @format */

import axios from 'axios'
import { REQUEST_API_URL } from '../config'

const PREFIX = 'notification'

export const notificationAPI = async (params: FormData) => axios.post(`${REQUEST_API_URL}/${PREFIX}/history`, params)
