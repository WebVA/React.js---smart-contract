import axios, { REQUEST_API_URL } from "../config";
import { ISignInLogData } from "../../../types/User";

const PREFIX = "user/singinlogs";

export const createSignInLogAPI = async (params: ISignInLogData) =>
    axios.post(`${REQUEST_API_URL}/${PREFIX}/create`, params);

export const getSignInLogsFilterAPI = async (params: FormData) =>
    axios.get(`${REQUEST_API_URL}/${PREFIX}/filter`, { params });

export const updateSignInLogAPI = async (params: ISignInLogData) =>
    axios.put(`${REQUEST_API_URL}/${PREFIX}/${params.id}`, params);

export const deleteSignInLogAPI = async (id: string) =>
    axios.delete(`${REQUEST_API_URL}/${PREFIX}/${id}`);