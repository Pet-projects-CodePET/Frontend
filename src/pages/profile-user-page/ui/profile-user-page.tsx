'use client';

import React from 'react';
import { NotificationToastContainer } from '@/widgets/notification-toast';
import { FormProfileEditFeature } from '@/features/form-profile-edit/form-profile-edit';

export const ProfileUser = () => {
	return (
		<>
			<FormProfileEditFeature />
			<NotificationToastContainer />
		</>
	);
};
