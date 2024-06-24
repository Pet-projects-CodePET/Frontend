import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
	baseURL: `https://${BASE_URL}/api/v1`,
	timeout: 5000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		//console.log('Request was sent', config);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		//console.log('Response received', response);
		return response;
	},
	(error) => {
		//console.log('Error message:', error);
		return Promise.reject(error);
	}
);
