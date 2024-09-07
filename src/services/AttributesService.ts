import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_DEV_URL = process.env.NEXT_PUBLIC_BASE_DEV_URL;
// const BASE_TEST_URL = process.env.NEXT_PUBLIC_BASE_TEST_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const attributesApi = createApi({
	reducerPath: 'attributesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getSkills: builder.query({
			query: () => ({
				url: '/api/v1/skills/',
				method: 'GET',
			}),
		}),
		getProfessions: builder.query({
			query: () => ({
				url: '/api/v1/professions/',
			}),
		}),
	}),
});

export const { useGetSkillsQuery, useGetProfessionsQuery } = attributesApi;
