/* eslint-disable camelcase */
import React, { useState } from 'react';
//import parse from 'html-react-parser';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { SingleSelectButton } from '@/shared/ui/single-select-button/single-select-button';
import { Option as SelectOption } from '@/shared/types/option';
import { MainButton } from '@/shared/ui';
import { IProjectsRequests } from '@/services/models/IProjectsRequests';
import { useRequestParticipationInProjectsMutation } from '@/services/ProjectService';
import styles from './invite-to-project.module.scss';

export const InviteToProject = ({
	project_specialists,
	projectId,
}: {
	projectId: number;
	project_specialists: [
		{
			id: number;
			profession: {
				id: number;
				specialization: string;
				specialty: string;
			};
		},
	];
}) => {
	const specializationArray = project_specialists.map((item) => {
		return {
			value: item.profession.id,
			label: item.profession.specialization,
		};
	});
	const [selectedPosition, setSelectedPosition] = useState({
		value: 0,
		label: ' ',
	});

	//const [currentText, setCurrentText] = useState('');

	const handleSpecializationChange = (selectedOptions: SelectOption[]) => {
		console.info('specialization: ', selectedOptions?.[0]);
		if (selectedOptions?.[0] !== undefined && selectedOptions.length !== 0) {
			setSelectedPosition(selectedOptions[0]);
		} else setSelectedPosition({ value: 0, label: ' ' });
	};

	const [requestInProject, { error }] =
		useRequestParticipationInProjectsMutation();
	//const token = localStorage.getItem('token');

	const handleRequestInProject = (projects: IProjectsRequests) => {
		const {
			project = projectId,
			position = selectedPosition.value as number /*cover_letter = currentText*/,
		} = projects;

		console.log(
			'requestInProject',
			requestInProject,
			project,
			position /*cover_letter*/
		);

		//console.log(token);
		//if (token) {
		requestInProject({ project, position /*cover_letter*/ })
			.then(() => {
				console.log('успех');
			})
			.catch((error) => {
				console.log('error', error);
			});
		console.log('ошибка', error);
		//	}
	};
	return (
		<>
			<div className={styles.specialty}>
				<SingleSelectButton
					name="select-recruitment-status"
					options={specializationArray}
					buttonLabel="Специальность"
					onChange={handleSpecializationChange}
				/>
			</div>
			<p className={styles.title}>Сопроводительное письмо</p>
			<TextEditor labelName={''} /*setCurrentText={setCurrentText}*/ />
			<div className={styles.button}>
				<MainButton
					variant="primary"
					width="regular"
					type="button"
					onClick={handleRequestInProject as () => void}>
					Откликнуться
				</MainButton>
			</div>
		</>
	);
};
