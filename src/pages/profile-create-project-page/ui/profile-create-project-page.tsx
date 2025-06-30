import React from 'react';
import { FormCreateProjectFeature } from '@/features';
import { NotificationToastContainer } from '@/widgets/notification-toast';
import styles from './profile-create-project-page.module.scss';

export const ProfileCreateProject = () => {
	return (
		<div>
			<div className={styles.container}>
				<FormCreateProjectFeature />
				<NotificationToastContainer />
			</div>
		</div>
	);
};
