import React from 'react';
import { Project } from '@/pages/project-page';
// import { axiosInstance } from '@/utils/axios-query/axiosInstance';

// export async function generateStaticParams() {
// 	const arr: string[] = [];
// 	const allPageIdData = async () => {
// 		const arr: string[] = [];
// 		for (let i = 1; i < 299; i++) {
// 			try {
// 				const req = (await axiosInstance.get(`/projects/?page=${i}`)).data
// 					.results;
// 				const id = req.map((project: { id: string }) => {
// 					return project.id.toString();
// 				});
// 				arr.push(...id);
// 			} catch (_) {
// 				//console.log(`Error fetching data for page ${i}:`);
// 				break;
// 			}
// 		}
// 		const req = (await axiosInstance('/projects/')).data.results;
// 		const mappedReq = req.map((response: { id: string }) => {
// 			return response.id.toString();
// 		});
// 		arr.push(...mappedReq);
// 		return arr; //?
// 	};

// 	const data = await allPageIdData();
// 	arr.push(...data);
// 	return arr.map((ids) => ({
// 		id: ids,
// 	}));
// }

const Page = ({ params }: { params: { id: number } }) => {
	return <Project id={params.id} />;
};
export default Page;
