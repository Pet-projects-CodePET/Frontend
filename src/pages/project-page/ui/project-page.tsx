'use client';
import React, { useEffect, useState } from 'react';
import { ProjectCardDetailed } from '@/widgets/project-card-detailed';
import { ProjectCardDetailType } from '@/widgets/project-card-detailed/ui/type';
//import { useGetProjectByIdQuery } from '@/services/ProjectService';

export const Project = ({ id }: { id: number }) => {
	//const { data: project } = useGetProjectByIdQuery({ id });
	//console.log('projectDetail', project);

	useEffect(() => {
		const getProjectsId = async (id: number) => {
			const res = await fetch(
				`https://devcodepet.tw1.ru/api/v1/projects/${id}/`,
				{ cache: 'no-cache', next: { revalidate: 0 } }
			);
			const project = await res.json();
			setProject(project);
		};
		getProjectsId(id);
	}, [id]);

	const [project, setProject] = useState({} as ProjectCardDetailType);

	return (
		<div>
			<ProjectCardDetailed
			    idProject={id}
				name={project?.name}
				description={project?.description}
				directions={project?.directions}
				busyness={project?.busyness}
				phone_number={project?.phone_number}
				link={project?.link}
				owner={project?.owner}
				started={project?.started}
				ended={project?.ended}
				status={project?.status}
				project_specialists={project?.project_specialists}
			/>
		</div>
	);
};
