import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/services/models/IUser';

const BASE_DEV_URL = process.env.NEXT_PUBLIC_BASE_DEV_URL;
const BASE_TEST_URL = process.env.NEXT_PUBLIC_BASE_TEST_URL;

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl:
			process.env.NODE_ENV === 'production' ? BASE_DEV_URL : BASE_TEST_URL,
		prepareHeaders: async (headers) => {
			const accessToken = localStorage.getItem('token');
			if (accessToken) {
				headers.set('Authorization', `Token ${accessToken}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		createUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: '/users/',
				method: 'POST',
				body: user,
			}),
		}),
		authUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: '/token/login/',
				method: 'POST',
				body: user,
			}),
		}),
		resetPasswordUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: '/users/reset_password/',
				method: 'POST',
				body: user,
			}),
		}),
		getUserMe: builder.query({
			query: () => ({
				url: '/users/me/',
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useAuthUserMutation,
	useResetPasswordUserMutation,
	useGetUserMeQuery,
} = userApi;
