import React from 'react';
import { Project } from '@/pages/project-page';
import { ProjectCardFullType } from '@/widgets/project-card-full/ui/type';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateStaticParams() {
	const projects = await fetch(
		`https://${BASE_URL}/api/v1/projects/`
	).then((res) => res.json());

	return projects.results.map((project: ProjectCardFullType) => ({
		id: project.id?.toString() as string,
	}));
}

const Page = () => {
	return <Project />;
};
export default Page;
