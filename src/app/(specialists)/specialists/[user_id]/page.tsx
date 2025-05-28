import React from 'react';
import { DetailedSpecialistPage } from '@/pages/specialist-in-details';

export const revalidate = 0;

const Page = ({ params }: { params: { user_id: number } }) => {
	return <DetailedSpecialistPage user_id={params.user_id} />;
};

export default Page;
