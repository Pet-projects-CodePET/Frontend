import {
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { IUser } from '@/services/models/IUser'
import { BASE_URL } from '@/utils/constants'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		createUser: builder.mutation<IUser, IUser>({
			query: (user) => ({
				url: '/users',
				method: 'POST',
				body: user,
			}),
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateUserMutation } = userApi;
