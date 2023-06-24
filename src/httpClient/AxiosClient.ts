import Axios from "axios";
import { handleRequest, handleResponse, handleApiError } from "./ClientHelper";

export function axiosClient(baseURL: string) {
  const clientInstance = Axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  clientInstance.interceptors.request.use(handleRequest);
  clientInstance.interceptors.response.use(handleResponse, handleApiError);
  return clientInstance;
}