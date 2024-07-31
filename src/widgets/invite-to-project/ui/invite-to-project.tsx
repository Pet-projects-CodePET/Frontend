/* eslint-disable camelcase */
import React from 'react';
import { InviteToProjectType } from './types';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { SingleSelectButton } from '@/shared/ui/single-select-button/single-select-button';
import { MainButton } from '@/shared/ui';
import { NotificationToastContainer } from '@/widgets/notification-toast';
import styles from './invite-to-project.module.scss';

export const InviteToProject = ({
	handleRequestInProject,
	specializationArray,
	handleSpecializationChange,
	setCurrentText,
	currentText,
	selectedPosition,
}: InviteToProjectType) => {
	return (
		<>
			<div className={styles.specialty}>
				<SingleSelectButton
					name="select-recruitment-status"
					options={specializationArray}
					buttonLabel="Специальность"
					value={selectedPosition}
					onChange={handleSpecializationChange}
				/>
			</div>
			<p className={styles.title}>Сопроводительное письмо</p>
			<TextEditor
				labelName={''}
				setCurrentText={setCurrentText}
				currentText={currentText}
			/>
			<div className={styles.button}>
				<MainButton
					variant="primary"
					width="regular"
					type="button"
					onClick={handleRequestInProject as () => void}>
					Откликнуться
				</MainButton>
			</div>
			<NotificationToastContainer />
		</>
	);
};
