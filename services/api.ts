import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.108.227.214:8000/api",
  headers: {
    Accept: "application/json",
  },
});