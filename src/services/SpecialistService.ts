	import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
	// import type { SpecialistInfoType } from './models/ISpecialistQuery';
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

	export const specilistsApi = createApi({
		reducerPath: 'specilistsApi',
		baseQuery: fetchBaseQuery({
			baseUrl: `https://${BASE_URL}/api/v1`,
		}),
		endpoints: (builder) => ({
			getAllSpecialistsData: builder.query({
				query: () => ({
					url: `/profiles/`,
					method: 'GET',
					providerTags: 'allSpecialist',
				}),
			}),
			getSpecificSpecialistData: builder.query({
				query: (specialistId) => ({
					url: `/profiles/${specialistId}/`,
					method: 'GET',
					providerTags: 'specificSpecialist',
				}),
			}),
		}),
	});

	export const {
		useGetAllSpecialistsDataQuery,
		useGetSpecificSpecialistDataQuery,
	} = specilistsApi;
