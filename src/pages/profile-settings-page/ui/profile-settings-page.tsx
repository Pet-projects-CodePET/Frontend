import React from 'react';

import {
	FormProfileSettingsFeature,
	FormChangePasswordFeature,
} from '@/features';

export const ProfileSettingsPage = () => {
	return (
		<>
			<FormProfileSettingsFeature />
			<FormChangePasswordFeature />
		</>
	);
};
