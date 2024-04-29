'use client';

import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
import {
	useDeleteAccountMutation,
	// useGetSettingsProfileVisibilityQuery,
} from '@/services/UserService';
import {
	NotificationToastContainer,
	toaster,
} from '@/widgets/notification-toast/';

export const FormProfileSettingsFeature: FC = () => {
	const [deleteAccount] = useDeleteAccountMutation();
	// const { data } = useGetSettingsProfileVisibilityQuery(null);

	const handleDeleteAccount = () => {
		// console.log('deleteAccount res', res);
		deleteAccount(null)
			.then((res) => {
				console.log('deleteAccount res', res);
				toaster({
					status: 'success',
					title: 'Аккаунт успешно удален',
				});
			})
			.catch((err) => {
				console.log('deleteAccount err', err);
				toaster({
					status: 'error',
					title: 'Аккаунт не удален!',
				});
			});
	};

	const handleSubmit = () => {
		// console.log('handleSubmit data', data);
	};

	return (
		<>
			<FormProfileSettings
				handleSubmit={handleSubmit}
				handleDeleteAccount={handleDeleteAccount}
				// settingsProfile={data}
			/>
			<NotificationToastContainer />
		</>
	);
};
