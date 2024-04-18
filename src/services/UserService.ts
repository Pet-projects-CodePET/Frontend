import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/services/models/IUser'; // const BASE_DEV_URL = process.env.NEXT_PUBLIC_BASE_DEV_URL;

// const BASE_DEV_URL = process.env.NEXT_PUBLIC_BASE_DEV_URL;
// const BASE_TEST_URL = process.env.NEXT_PUBLIC_BASE_TEST_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
		// process.env.NODE_ENV === 'production' ? BASE_TEST_URL : BASE_DEV_URL,
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
		changePassword: builder.mutation<IUser, IUser>({
			query: ({newPassword, password}) => ({
				url: '/users/set_password/',
				method: 'POST',
				body: {
					// eslint-disable-next-line camelcase
					new_password: newPassword,
					// eslint-disable-next-line camelcase
					current_password: password
				},
			}),
		}),
		deleteAccount: builder.mutation({
			query: () => ({
				url: '/users/me/',
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useAuthUserMutation,
	useResetPasswordUserMutation,
	useGetUserMeQuery,
	useChangePasswordMutation,
	useDeleteAccountMutation,
} = userApi;
