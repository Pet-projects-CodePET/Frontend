'use client';

import React from 'react';
import { NotificationToastContainer } from '@/widgets/notification-toast';
import { FormProfileEditFeature } from '@/features/form-profile-edit/form-profile-edit';
import styles from './profile-user-page.module.scss'

export const ProfileUser = () => {
	return (
		<div className={styles.container}>
			<FormProfileEditFeature />
			<NotificationToastContainer />
		</div>
	);
};
