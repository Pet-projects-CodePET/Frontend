import React from 'react';
import { FormCreateProjectFeature } from '@/features';
import styles from './profile-create-project-page.module.scss';

export const ProfileCreateProject = () => {
	return (
		<div>
			<div className={styles.container}>
				<FormCreateProjectFeature />
			</div>
		</div>
	);
};
