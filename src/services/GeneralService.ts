import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const generalApi = createApi({
	reducerPath: 'generalApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://devcodepet.tw1.ru/api/v1',
		
	}),
	endpoints: (builder) => ({
	
		getCount: builder.query({
			query: () => ({
				url: '/counter/',
				method: 'GET',
			}),
		}),
		getSection: builder.query({
			query:  () => ({
				url: '/section/',
				method: 'GET',
			}),
		}),
	}),
});

export const {
useGetCountQuery,
useGetSectionQuery
} = generalApi;
