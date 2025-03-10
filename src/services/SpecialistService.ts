import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const specilistsApi = createApi({
	reducerPath: 'specilistsApi',
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
		getAllSpecialistsData: builder.query({
			query: (params) => ({
				url: `/profiles/?page=${params}`,
				method: 'GET',
				providerTags: 'allSpecialist',
			}),
			keepUnusedDataFor: 1,
		}),
		getFavoriteSpecialists: builder.query({
			query: ({ currentPage, query }) => ({
				url: `/profiles/?is_favorite=1&page=${currentPage}&search=${query}`,
				method: 'GET',
			}),
			keepUnusedDataFor: 1,
		}),
		addFavoriteSpecialist: builder.mutation({
			query: (user) => ({
				url: `/profiles/${user.id}/favorite/`,
				method: 'POST',
				body: user,
			}),
		}),
		deleteFavoriteSpecialist: builder.mutation({
			query: (id) => ({
				url: `/profiles/${id}/favorite/`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetAllSpecialistsDataQuery,
	useGetFavoriteSpecialistsQuery,
	useAddFavoriteSpecialistMutation,
	useDeleteFavoriteSpecialistMutation,
} = specilistsApi;
