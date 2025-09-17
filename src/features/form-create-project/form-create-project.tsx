'use client';

import React, { FC, useEffect, useState } from 'react';
import { Form } from '@/shared/ui';
import { FormFieldsCreateProject } from '@/entities/form-create-project';
import { ProfileLink } from '@/shared/ui';
import {
	useGetProfessionsQuery,
	useGetSkillsQuery,
	useAddNewProjectMutation,
	useAddProjectDraftMutation,
} from '@/services/ProjectService';
import { Loader } from '@/shared/ui';
import { IUser } from '@/services/models/IUser';
import { toaster } from '@/widgets/notification-toast';
import { TContact } from '@/shared/ui/contact-card/types';
import FormCreateProjectSchema from '@/shared/utils/validation-schemas/form-create-project-schems';
import FormCreateProjectDraftSchema from '@/shared/utils/validation-schemas/form-create-project-draft-schema';

export const FormCreateProjectFeature: FC = () => {
	const [createNewProject, { error: createNewProjectError }] =
		useAddNewProjectMutation();

	const [addProjectDraft, { error: addProjectDraftError }] =
		useAddProjectDraftMutation();

	const { data: professions, isLoading: isLoadingProfessions } =
		useGetProfessionsQuery([]);

	const { data: allSkills, isLoading: isLoadingSkills } = useGetSkillsQuery([]);
	const [currentText, setCurrentText] = useState<string | undefined>(undefined);
	const [actionType, setActionType] = useState<'publish' | 'draft'>('draft');
	const [isSubmitSuccessfulReset, setSubmitSuccessfulReset] = useState(false);
	const [contacts, setContacts] = useState<TContact[]>([]);
	const [serverNameError, setServerNameError] = useState('');
	const [serverLinkError, setServerLinkError] = useState('');
	const [nameProject, setNameProject] = useState<string>('');
	const [linkProject, setLinkProject] = useState<string>('');

	useEffect(() => {
		const savedNameProject = localStorage.getItem('nameProject');
		const savedLinkProject = localStorage.getItem('linkProject');
		const savedDescriptionProject = localStorage.getItem('descriptionProject');
		if (savedNameProject) {
			setNameProject(savedNameProject);
		}
		if (savedLinkProject) {
			setLinkProject(savedLinkProject);
		}
		if (savedDescriptionProject) {
			setCurrentText(savedDescriptionProject);
		}
	}, []);

	const handleNameProjectChange = (name: string) => {
		setNameProject(name);
		if (name.trim()) {
			localStorage.setItem('nameProject', name);
		} else {
			localStorage.removeItem('nameProject');
		}
	};

	const handleLinkProjectChange = (link: string) => {
		setLinkProject(link);
		if (link.trim()) {
			localStorage.setItem('linkProject', link);
		} else {
			localStorage.removeItem('linkProject');
		}
	};

	const handleDescriptionProjectChange = (description: string) => {
		setCurrentText(description);
		if (description.trim()) {
			localStorage.setItem('descriptionProject', description);
		} else {
			localStorage.removeItem('descriptionProject');
		}
	};

	const clearProjectData = () => {
		setNameProject('');
		setLinkProject('');
		setCurrentText('');
		localStorage.removeItem('nameProject');
		localStorage.removeItem('linkProject');
		localStorage.removeItem('descriptionProject');
	};

	const mergeContacts = (
		contacts: Record<string, string>[]
	): Record<string, string> => {
		const result: Record<string, string> = {};

		for (const contact of contacts) {
			for (const [key, value] of Object.entries(contact)) {
				if (!(key in result)) {
					result[key] = value;
				}
			}
		}
		return result;
	};

	const handleSubmit = (project: IUser) => {
		if (actionType === 'publish') {
			handleCreateProject(project);
		} else {
			handleAddProjectDraft(project);
		}
	};

	const handleCreateProject = (project: IUser) => {
		const projectData = {
			...project,
			directions: Array.isArray(project.directions) ? project.directions : [],
			description: currentText || '',
			...mergeContacts(contacts),
		};
		createNewProject(projectData)
			.unwrap()
			.then(() => {
				clearProjectData();
				toaster({
					status: 'success',
					title: 'Ваш проект опубликован',
					subtitle: 'Управлять проектами можно в разделе «Мои проекты»',
				});
				setSubmitSuccessfulReset(true);
			})
			.catch((error) => {
				console.log(error.data);
				toaster({
					status: 'error',
					title: 'Ошибка',
					subtitle: `${error.data?.description /*|| error.data?.new_password ||*/ || 'Попробуйте еще раз'}`,
				});
				setServerNameError(error.data?.name);
				setServerLinkError(error.data?.link || '');
			});
		console.log('addDraftProject error', createNewProjectError);
	};

	const handleAddProjectDraft = (project: IUser) => {
		const projectData = {
			...project,
			directions: Array.isArray(project.directions) ? project.directions : [],
			description: currentText || '',
			...mergeContacts(contacts),
		};
		addProjectDraft(projectData)
			.unwrap()
			.then(() => {
				clearProjectData();
				toaster({
					status: 'success',
					title: 'Ваш черновик сохранен',
					subtitle: 'Управлять проектами можно в разделе «Мои проекты»',
				});
				setSubmitSuccessfulReset(true);
			})
			.catch((error) => {
				console.log(error.data);
				toaster({
					status: 'error',
					title: 'Ошибка',
					subtitle: `${error.data?.description || 'Попробуйте еще раз'}`,
				});
				setServerNameError(error.data?.name);
				setServerLinkError(error.data?.link || '');
			});
		console.log('addDraftProject error', addProjectDraftError);
	};

	return (
		<>
			<ProfileLink title="Создать проект" />
			{isLoadingProfessions || isLoadingSkills ? (
				<Loader />
			) : (
				<Form
					onSubmit={handleSubmit}
					schema={
						actionType === 'publish'
							? FormCreateProjectSchema
							: FormCreateProjectDraftSchema
					}>
					<FormFieldsCreateProject
						allSkills={allSkills}
						professions={professions}
						currentText={currentText}
						setCurrentText={setCurrentText as () => void}
						setActionType={setActionType}
						isSubmitSuccessfulReset={isSubmitSuccessfulReset}
						setSubmitSuccessfulReset={setSubmitSuccessfulReset}
						contacts={contacts}
						setContacts={setContacts}
						serverNameError={serverNameError}
						setServerNameError={setServerNameError}
						setServerLinkError={setServerLinkError}
						serverLinkError={serverLinkError}
						nameProject={nameProject}
						onNameProjectChange={handleNameProjectChange}
						onClearProjectData={clearProjectData}
						linkProject={linkProject}
						onLinkProjectChange={handleLinkProjectChange}
						onDescriptionProjectChange={handleDescriptionProjectChange}
					/>
				</Form>
			)}
		</>
	);
};
