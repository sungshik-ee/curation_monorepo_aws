import axios from 'axios';

const axiosInstance = axios.create({
    // TODO : env로 설정
    baseURL: 'http://server.local.danbi:8080',
});

export const getAxios = () => axiosInstance;
