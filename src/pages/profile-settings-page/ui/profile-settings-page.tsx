import React from 'react';
import { ProfileSettings } from '@/entities/profile-settings';
import { FormChangePasswordFeature } from '@/features/form-change-password/form-change-password';

export const ProfileSettingsPage = () => {
	return (
		<>
			<ProfileSettings />
			<FormChangePasswordFeature />
		</>
	);
};
