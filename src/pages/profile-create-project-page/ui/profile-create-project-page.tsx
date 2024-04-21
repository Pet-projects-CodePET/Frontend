import React from 'react';
import styles from '@/pages/profile-create-project-page/ui/profile-create-project-page.module.scss';
import { FormCreateProjectFeature } from '@/features';

export const ProfileCreateProject = () => {
	return (
		<div>
			<div>Создать проект</div>
			<div className={styles.container}>
				<FormCreateProjectFeature />
			</div>
		</div>
	);
};
