import axios from 'axios';

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_URL = 'devcodepet.tw1.ru'

export const getDataAxiosInstance = axios.create({
	baseURL: `https://${BASE_URL}/api/v1`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

getDataAxiosInstance.interceptors.request.use((value) => {
	console.log('check the work of an interceptor');
	return value
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
