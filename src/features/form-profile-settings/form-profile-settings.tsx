'use client';

import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
import {} from // useGetSettingsProfileVisibilityQuery,
'@/services/UserService';
import {
	NotificationToastContainer,
	// toaster,
} from '@/widgets/notification-toast/';
// import { useRouter } from 'next/navigation';

export const FormProfileSettingsFeature: FC = () => {
	// const router = useRouter();
	// const { data } = useGetSettingsProfileVisibilityQuery(null);

	const handleSubmitForm = (data: {
		notify: boolean;
		subscription: boolean;
		visible_status: number;
		visible_status_contacts: number;
	}) => {
		console.log('handleSubmit data', data);
	};

	return (
		<>
			<FormProfileSettings
				handleSubmitForm={handleSubmitForm}
				// settingsProfile={data}
			/>
			<NotificationToastContainer />
		</>
	);
};
