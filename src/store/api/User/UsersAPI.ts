import axios, { REQUEST_API_URL } from "../config";
import { IUserData } from "../../../types/User";

const PREFIX = "user/users";

export const createUserAPI = async (params: IUserData) =>
    axios.post(`${REQUEST_API_URL}/${PREFIX}/create`, params);

export const getUsersFilterAPI = async (params: FormData) =>
    axios.get(`${REQUEST_API_URL}/${PREFIX}/filter`, { params });

export const updateUserAPI = async (params: IUserData) =>
    axios.put(`${REQUEST_API_URL}/${PREFIX}/${params.id}`, params);

export const deleteUserAPI = async (id: string) =>
    axios.delete(`${REQUEST_API_URL}/${PREFIX}/${id}`);