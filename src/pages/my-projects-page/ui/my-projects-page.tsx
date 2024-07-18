import { BackLink } from '@/entities/back-link';
// import { Form } from '@/shared/ui';
import {
	ProjectEditForm,
	SpecialistEditForm,
} from '@/widgets/project-edit-forms';
import React from 'react';

export const MyProjectsPage = () => {
	return (
		<>
			<BackLink title={'Организатор'} href={'idk'} />
			
			{/* <Form children={undefined} onSubmit={undefined}> */}
				<ProjectEditForm />
			{/* </Form> */}
			<SpecialistEditForm />
		</>
	);
};
