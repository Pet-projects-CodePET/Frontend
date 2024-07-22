import React from 'react';
import { MainButton } from '@/shared/ui';
import { IProjectsRequests } from '@/services/models/IProjectsRequests';
import { useRequestParticipationInProjectsMutation } from '@/services/ProjectService';

export const InviteToProjectFeature = (projects: IProjectsRequests) => {
	const [requestInProject] = useRequestParticipationInProjectsMutation();
    const { project, position } = projects;


	const handleRequestInProject = () => {
		console.log('requestInProject', requestInProject, project, position);
	};

	return (
		<MainButton
			variant="primary"
			width="regular"
			type="button"
			onClick={handleRequestInProject}>
			Откликнуться
		</MainButton>
	);
};
