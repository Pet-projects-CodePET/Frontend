import React from 'react';
import { DetailedSpecialistPage } from '@/pages/specialist-in-details';
import { axiosInstance } from '@/utils/axios-query/axiosInstance';

export async function generateStaticParams() {
	const arr: string[] = [];

	const allPageIdData = async () => {
		const arr: string[] = [];

		for (let i = 1; i < 999; i++) {
			try {
				const req = (await axiosInstance.get(`/profiles/?page=${i}`)).data
					.results;

				const id = req.map((project: { user_id: string }) => {
					return project.user_id.toString();
				});
				arr.push(...id);
			} catch (_) {
				console.log(`Error fetching data for page ${i}:`);
				break;
			}
		}
		return arr; //?
	};

	const firstPage = (await axiosInstance.get('/profiles/')).data.results;

	const idInitialPages = firstPage.map(
		({ req }: { req: { user_id: string } }) => {
			return req?.user_id.toString();
		}
	);

	const id = await allPageIdData();
	const idInitialPage = idInitialPages;

	arr.push(...id, ...idInitialPage);
	return arr.map((ids) => ({
		id: ids,
	}));
}

const Page = (param: { params: { id: number } }) => {
	return <DetailedSpecialistPage params={param} />;
};

export default Page;
