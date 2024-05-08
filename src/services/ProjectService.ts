import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const projectsApi = createApi({
	reducerPath: 'projectsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => ({
				url: '/projects/',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetProjectsQuery } = projectsApi;
