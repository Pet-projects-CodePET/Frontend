import React from 'react';
import { DetailedSpecialistPage } from '@/pages/specialist-in-details';
import { axiosInstance } from '@/utils/declension/axiosInstance';

export async function generateStaticParams() {
	const req = (await axiosInstance.get(`/profiles/`)).data.results;

	const id = req.map((project: { user_id: string }) => ({
		id: project.user_id.toString(),
	}));

	return id;
}

const Page = () => {
	return <DetailedSpecialistPage />;
};

export default Page;
