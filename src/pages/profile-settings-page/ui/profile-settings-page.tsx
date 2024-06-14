import React from 'react';

import {
	FormProfileSettingsFeature,
	FormChangePasswordFeature,
	DeleteAccountFeature,
} from '@/features';

export const ProfileSettingsPage = () => {
	return (
		<>
			<FormProfileSettingsFeature />
			<FormChangePasswordFeature />
			<DeleteAccountFeature />
		</>
	);
};
