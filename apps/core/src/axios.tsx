import axios from 'axios';

const axiosInstance = axios.create({
    // TODO : env로 설정
    baseURL: 'http://server.local.danbi:8080',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true,
    // baseURL: process.env.REACT_APP_API_URL,
});

export const getAxios = () => axiosInstance;
