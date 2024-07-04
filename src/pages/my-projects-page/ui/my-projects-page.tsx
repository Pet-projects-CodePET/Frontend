import { BackLink } from '@/entities/back-link';
import { ProjectEditForm, SpecialistEditForm } from '@/widgets/project-edit-forms';
import React from 'react';

export const MyProjectsPage = () => {
	return (
		<>
			<BackLink title={'Организатор'} href={'idk'} />
			<ProjectEditForm/>
			<SpecialistEditForm/>
		</>
	);
};
