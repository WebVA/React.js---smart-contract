import axios, { REQUEST_API_URL } from "../config";

const PREFIX = "dashboard/dashboard";

export const createAPI = async (params: FormData) =>
    axios.post(`${REQUEST_API_URL}/${PREFIX}/create`, params);
