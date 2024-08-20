import React from 'react';
import { DetailedSpecialistPage } from '@/pages/specialist-in-details';

export const revalidate = 0;

const Page = (param: { params: { id: number } }) => {
	return <DetailedSpecialistPage params={param} />;
};

export default Page;
