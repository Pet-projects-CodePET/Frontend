'use client';
import React from 'react';
import { ProjectCardDetailed } from '@/widgets/project-card-detailed';
import { useGetProjectByIdQuery } from '@/services/ProjectService';

export const Project = ({ id }: { id: number }) => {
	const { data: project } = useGetProjectByIdQuery({ id });
	//console.log('projectDetail', project);
    
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
