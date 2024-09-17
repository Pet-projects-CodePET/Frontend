import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProjectsRequests } from './models/IProjectsRequests';
import { FavoriteProjectType } from './models/IFavoriteProject';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const projectsApi = createApi({
	reducerPath: 'projectsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
		prepareHeaders: async (headers) => {
			const accessToken = localStorage.getItem('token');
			if (accessToken) {
				headers.set('Authorization', `Token ${accessToken}`);
			}
			return headers;
		},
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
		requestParticipationInProjects: builder.mutation<IProjectsRequests,IProjectsRequests>({
			query: (projects) => ({
				url: `/projects/requests/`,
				method: 'POST',
				body: projects,
			}),
		}),
		addFavoriteProject: builder.mutation<FavoriteProjectType, FavoriteProjectType>({
			query: (project) => ({
				url: `/projects/${project.id}/favorite/`,
				method: 'POST',
				body: project,
			}),
		}),
		deleteFavoriteProject: builder.mutation<FavoriteProjectType, FavoriteProjectType>({
			query: (project) => ({
				url: `/projects/${project.id}/favorite/`,
				method: 'DELETE',
				body: project,
			}),
		}),
	}),
});

export const {
	useGetProjectsPreviewMainQuery,
	useGetAllProjectsQuery,
	useGetProjectByIdQuery,
	useRequestParticipationInProjectsMutation,
	useAddFavoriteProjectMutation,
	useDeleteFavoriteProjectMutation
} = projectsApi;
