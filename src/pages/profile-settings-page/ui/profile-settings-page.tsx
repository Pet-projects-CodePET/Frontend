import React from 'react';

import {
	FormProfileSettingsFeature,
	FormChangePasswordFeature,
	DeleteAccountFeature,
} from '@/features';
import { NotificationToastContainer } from '@/widgets/notification-toast';

export const ProfileSettingsPage = () => {
	return (
		<>
			<FormProfileSettingsFeature />
			<FormChangePasswordFeature />
			<DeleteAccountFeature />
			<NotificationToastContainer />
		</>
	);
};
