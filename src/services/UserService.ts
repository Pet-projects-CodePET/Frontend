import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/services/models/IUser';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://89.23.117.80/api/v1',
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
				url: 'users/reset_password/',
				method: 'POST',
				body: user,
			}),
		}),
		getUserMe: builder.query ({
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
