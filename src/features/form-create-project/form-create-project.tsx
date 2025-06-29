'use client';

import React, { FC, /*useRef,*/ useState } from 'react';
import { Form } from '@/shared/ui';
import { FormFieldsCreateProject } from '@/entities/form-create-project';
import { ProfileLink } from '@/shared/ui';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
	useAddNewProjectMutation
} from '@/services/ProjectService';
import { Loader } from '@/shared/ui';
import { IUser } from '@/services/models/IUser';

export const FormCreateProjectFeature: FC = () => {

	const [ createNewProject, {error} ] = useAddNewProjectMutation();

	const { data: professions, isLoading: isLoadingProfessions } =
		useGetProfessionsQuery([]);
	const { data: allSkills, isLoading: isLoadingSkills } = useGetSkillsQuery([]);
	const [currentText, setCurrentText] = useState(undefined);

		const handleSubmit = (project: IUser) => {
			const projectData = {
				...project,
				description: currentText || '' 
			};
	
		createNewProject(projectData)
			.unwrap()
			.then(() => console.log('новый проект'))
			.catch((error) => {
				console.log(error.data);
				// setServerErrorText(error.data?.non_field_errors || '');
				// setServerEmailError(error.data?.email);
				// setServerUsernameError(error.data?.username);
				// setServerPasswordError(error.data?.password);
			});

		console.log('createProject error', error);
	};

	return (
		<>
			<ProfileLink title="Создать проект" />
			{isLoadingProfessions || isLoadingSkills ? (
				<Loader />
			) : (
				<Form onSubmit={handleSubmit}>
					<FormFieldsCreateProject
						allSkills={allSkills}
						professions={professions}
						currentText={currentText}
						setCurrentText={setCurrentText as () => void}
					/>
				</Form>
			)}
		</>
	);
};
