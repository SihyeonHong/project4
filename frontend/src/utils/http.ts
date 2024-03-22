import { API_BASE_URL } from "@/settings";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  withCredentials: true,
});
