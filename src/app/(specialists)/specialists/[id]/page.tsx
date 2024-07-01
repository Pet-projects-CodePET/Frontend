import React from 'react';
import { DetailedSpecialistPage } from '@/pages/specialist-in-details';
import { axiosInstance } from '@/utils/axios-query/axiosInstance';

export async function generateStaticParams() {
	const arr: string[] = [];

	const allPageIdData = async () => {
		const arr: string[] = [];

		for (let i = 1; i < 299; i++) {
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
		const req = (await axiosInstance('/profiles/')).data.results;

		const mappedReq = req.map((response: { user_id: string }) => {
			return response.user_id.toString();
		});

		arr.push(...mappedReq);
		return arr; //?
	};

	const data = await allPageIdData();

	arr.push(...data);

	return arr.map((ids) => ({
		id: ids,
	}));
}

const Page = (param: { params: { id: number } }) => {
	return <DetailedSpecialistPage params={param} />;
};

export default Page;
