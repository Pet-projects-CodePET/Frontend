/* eslint-disable camelcase */
import React from 'react';
import { InviteToProjectVacancyType } from './types';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { MainButton } from '@/shared/ui';
import { NotificationToastContainer } from '@/widgets/notification-toast';
import styles from './invite-to-project-vacancy.module.scss';
export const InviteToProjectVacancy = ({
	handleRequestInProject,
	setCurrentText,
	currentText,
	project_specialists,
}: InviteToProjectVacancyType) => {
	return (
		<>
			<div className={styles.specialty}>
				<p className={styles.specialty__tag}>
					{project_specialists.specialization}
				</p>
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
