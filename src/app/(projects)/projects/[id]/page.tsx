import React from 'react';
import { projectsArray } from '@/shared/constants';
import { Project } from '@/pages/project-page';
export function generateStaticParams() {
	const projects = projectsArray.map((project) => ({
		id: project.id.toString(),
	}));
	return projects;
}
const Page = () => {
	return (
			<Project />
	);
};
export default Page;
