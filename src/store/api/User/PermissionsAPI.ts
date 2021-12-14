import axios, { REQUEST_API_URL } from "../config";
import { IPermissionData } from "../../../types/User";

const PREFIX = "user/permissions";

export const createPermissionAPI = async (params: IPermissionData) =>
    axios.post(`${REQUEST_API_URL}/${PREFIX}/create`, params);

export const getPermissionsFilterAPI = async (params: IPermissionData) =>
    axios.get(`${REQUEST_API_URL}/${PREFIX}/filter`, { params });

export const updatePermissionAPI = async (params: IPermissionData) =>
    axios.put(`${REQUEST_API_URL}/${PREFIX}/${params.id}`, params);

export const deletePermissionAPI = async (id: string) =>
    axios.delete(`${REQUEST_API_URL}/${PREFIX}/${id}`);