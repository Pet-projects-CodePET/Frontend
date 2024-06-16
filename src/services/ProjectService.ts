import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const projectsApi = createApi({
	reducerPath: 'projectsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getProjectsPreviewMain: builder.query({
			query: () => ({
				url: '/projects/preview_main/',
				method: 'GET',
			}),
		}),
		getAllProjects: builder.query({
			query: () => ({
				url: '/projects/',
				method: 'GET',
			}),
		}),
		getProjectsId: builder.query({
			query: ({id}) => ({
				url: `/projects/${id}/`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetProjectsPreviewMainQuery, useGetAllProjectsQuery, useGetProjectsIdQuery } = projectsApi;
