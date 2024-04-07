import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_DEV_URL = process.env.NEXT_PUBLIC_BASE_DEV_URL;
// const BASE_TEST_URL = process.env.NEXT_PUBLIC_BASE_TEST_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const generalApi = createApi({
	reducerPath: 'generalApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
		// process.env.NODE_ENV === 'production' ? BASE_TEST_URL : BASE_DEV_URL,
		
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
