import axios, { REQUEST_API_URL } from "../config";
import { IAdminData } from "../../../types/User";

const PREFIX = "user/admins";

export const createAdminAPI = async (params: IAdminData) =>
    axios.post(`${REQUEST_API_URL}/${PREFIX}/create`, params);

export const getAdminsFilterAPI = async (params: FormData) =>
    axios.get(`${REQUEST_API_URL}/${PREFIX}/filter`, { params });

export const updateAdminAPI = async (params: IAdminData) =>
    axios.put(`${REQUEST_API_URL}/${PREFIX}/${params.id}`, params);

export const deleteAdminAPI = async (id: string) =>
    axios.delete(`${REQUEST_API_URL}/${PREFIX}/${id}`);