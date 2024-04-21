import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const projectApi = createApi({
	reducerPath: 'projectApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getDirections: builder.query({
			query: () => ({
				url: '/projects/directions/',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetDirectionsQuery } = projectApi;
