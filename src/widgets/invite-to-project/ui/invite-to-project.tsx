/* eslint-disable camelcase */
import React, { useState } from 'react';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { InviteToProjectFeature } from '@/features';
import { SingleSelectButton } from '@/shared/ui/single-select-button/single-select-button';
//import { Option } from '@/shared/types/option';
import styles from './invite-to-project.module.scss';

export const InviteToProject = ({
	project_specialists,
	project,
	//position,
}: {
	project: number;
	//position: number;
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
			value: item.profession.specialization,
			label: item.profession.specialization,
			id: item.profession.id,
		};
	});

	const [currentSpecailty, setCurrentSpecalty] = useState(0);

	const handleSpecializationChange = (selectedOptions: (string | object)[]) => {
		console.info('specialization: ', selectedOptions?.[0]);
		if (selectedOptions?.[0] !== undefined) {
			setCurrentSpecalty(selectedOptions?.[0].id);
		} else setCurrentSpecalty(0);
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
			<TextEditor labelName={''} />
			<div className={styles.button}>
				<InviteToProjectFeature project={project} position={currentSpecailty} />
			</div>
		</>
	);
};
