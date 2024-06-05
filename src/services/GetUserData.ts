import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { QuerySpecialistData } from './models/ISpecialistQuery';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const projectsApi = createApi({
	reducerPath: 'projectsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getSpecialistData: builder.query<QuerySpecialistData, void>({
			query: (specialistId) => ({
				url: `/profiles/${specialistId}/`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetSpecialistDataQuery } = projectsApi;
