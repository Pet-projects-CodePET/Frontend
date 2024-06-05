import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getDataAxiosInstance = axios.create({
	baseURL: `https://${BASE_URL}/api/v1`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

getDataAxiosInstance.interceptors.request.use(() => {
	console.log('check the work of an interceptor');
});

// export const getDataAxiosInstance = axios.create({
//     baseURL: `https://pokeapi.co/api/v2/`,
//     headers: {
//         'Accept': 'application/json',
//     }

// })

// getDataAxiosInstance.get('')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
