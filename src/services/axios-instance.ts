import axios from 'axios';
import type { AxiosInstance } from 'axios';

interface AxiosInstanceOptions {
  baseURL?: string;
  headers?: {
    Authorization?: string;
  };
}

const options: AxiosInstanceOptions = {};
options.baseURL = process.env.API_URL || 'https://dog.ceo/api';
const axiosInstance: AxiosInstance = axios.create(options);

export default axiosInstance;
