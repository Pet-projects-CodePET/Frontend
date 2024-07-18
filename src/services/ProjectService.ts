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
			query: ({ currentPage }) => ({
				url: `/projects/?page=${currentPage}`,
				method: 'GET',
			}),
		}),
		getProjectById: builder.query({
			query: ({ id }) => ({
				url: `/projects/${id}/`,
				method: 'GET',
			}),
		}),
		getProfessions: builder.query({
			query: () => ({
				url: '/professions/',
				method: 'GET',
			}),
		}),
		getSkills: builder.query({
			query: () => ({
				url: '/skills/',
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useGetProfessionsQuery,
	useGetSkillsQuery,
	useGetProjectsPreviewMainQuery,
	useGetAllProjectsQuery,
	useGetProjectByIdQuery,
} = projectsApi;
