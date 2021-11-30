import axios from 'axios';

const baseURL = 'https://98a5-114-142-173-5.ngrok.io/api/v1/';


export const axiosAuth = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosAuth;
