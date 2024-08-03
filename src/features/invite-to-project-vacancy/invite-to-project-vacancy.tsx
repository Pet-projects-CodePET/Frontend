/* eslint-disable camelcase */
'use client';
import React, { useState } from 'react';
import { InviteToProjectVacancy } from '@/widgets/invite-to-project-vacancy';
import { useRequestParticipationInProjectsMutation } from '@/services/ProjectService';
import { IProjectsRequests } from '@/services/models/IProjectsRequests';
import { toaster } from '@/widgets/notification-toast';
export const InviteToProjectVacancyFeature = ({
	project_specialists,
	projectId,
}: {
	projectId: number;
	project_specialists: {
		id: number;
		specialization: string;
		specialty: string;
	};
}) => {
	const [currentText, setCurrentText] = useState<string>('');
	const [requestInProject] = useRequestParticipationInProjectsMutation();
	const handleRequestInProject = (projects: IProjectsRequests) => {
		const {
			project = projectId,
			position = project_specialists.id,
			cover_letter = currentText,
		} = projects;

		//console.log('requestInProject', requestInProject, project,position, cover_letter);
		requestInProject({ project, position, cover_letter })
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Заявка отправлена',
					subtitle: 'Отслеживать статус можно в разделе проекты',
				});
			})
			.catch((error) => {
				toaster({
					status: 'error',
					title: 'Ошибка отправки',
					subtitle: `${error.data?.unique_in_progress?.[0] || error.data?.cover_letter?.[0] || 'Попробуйте отправить ещё раз'}`,
				});
				console.log('errorCatch', error);
			});
	};
	return (
		<InviteToProjectVacancy
			handleRequestInProject={handleRequestInProject}
			setCurrentText={setCurrentText}
			currentText={currentText}
			project_specialists={project_specialists}
		/>
	);
};
