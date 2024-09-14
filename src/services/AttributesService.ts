import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const attributesApi = createApi({
	reducerPath: 'attributesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getSkills: builder.query({
			query: () => ({
				url: '/skills/',
				method: 'GET',
			}),
		}),
		getProfessions: builder.query({
			query: () => ({
				url: '/professions/',
				method: 'GET',
			}),
		}),
		getDirections: builder.query({
			query: () => ({
				url: '/projects/directions/',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetSkillsQuery, useGetProfessionsQuery, useGetDirectionsQuery } = attributesApi;
