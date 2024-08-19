import React from 'react';
import { Project } from '@/pages/project-page';

export const revalidate = 0;

const Page = ({ params }: { params: { id: number } }) => {
	return <Project id={params.id} />;
};
export default Page;
