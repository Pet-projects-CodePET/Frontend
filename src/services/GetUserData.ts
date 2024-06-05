import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface QueryUserData {
	avatar: string;
	username: string;
	name: string;
	ready_to_participate: true;
	specialists: [
		{
			id: 0;
			profession: {
				id: 0;
			};
			level: 1;
			skills: [
				{
					id: 0;
					name: string;
				},
			];
		},
	];
	is_favorite: string;
	portfolio_link: string;
	birthday: number;
	country: string;
	city: string;
	phone_number: number;
	telegram_nick: string;
	email: string;
	projects: [
		{
			additionalProp1: string;
			additionalProp2: string;
			additionalProp3: string;
		},
	];
}

export const projectsApi = createApi({
	reducerPath: 'projectsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://${BASE_URL}/api/v1`,
	}),
	endpoints: (builder) => ({
		getUserData: builder.query<QueryUserData, void>({
			query: (userId) => ({
				url: `/profiles/${userId}/`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetUserDataQuery } = projectsApi;
