// src/api/axios.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // your backend url

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
