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
import { useRouter } from 'next/navigation';

export const FormProfileSettingsFeature: FC = () => {
	const [deleteAccount] = useDeleteAccountMutation();
	const router = useRouter();
	// const { data } = useGetSettingsProfileVisibilityQuery(null);

	const handleDeleteAccount = (password: string) => {
		console.log('handleDeleteAccount ', password);
		deleteAccount(password)
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Аккаунт успешно удален',
				});
				localStorage.clear();
				router.push('/');
			})
			.catch((error) => {
				toaster({
					status: 'error',
					title: 'Ошбка удаления',
					subtitle: `${error.data?.current_password || 'Попробуйте еще раз'}`,
				});
			});
	};

	const handleSubmit = (data: unknown) => {
		console.log('handleSubmit data', data);
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
