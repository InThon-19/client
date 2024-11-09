import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

class ApiClient {
  client: AxiosInstance;

  constructor(options?: CreateAxiosDefaults) {
    this.client = axios.create({
      baseURL: 'http://localhost:4000', // add Default API URL
      withCredentials: true,
      ...options,
    });
  }
}

export const client = new ApiClient().client;

export default ApiClient;
