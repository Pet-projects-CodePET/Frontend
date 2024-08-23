import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const specilistsApi = createApi({
	reducerPath: 'specilistsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getAllSpecialistsData: builder.query({
			query: (params) => ({
				url: `/profiles/?page=${params}`,
				method: 'GET',
				providerTags: 'allSpecialist',
			}),
		}),
	}),
});

export const { useGetAllSpecialistsDataQuery } = specilistsApi;
