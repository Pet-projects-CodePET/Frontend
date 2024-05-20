'use client';

import React, { FC } from 'react';
import { FormProfileSettings } from '@/entities/form-profile-settings';
import {
	// useDeleteAccountMutation,
	// useGetSettingsProfileVisibilityQuery,
} from '@/services/UserService';
import {
	NotificationToastContainer,
	// toaster,
} from '@/widgets/notification-toast/';
// import { useRouter } from 'next/navigation';

export const FormProfileSettingsFeature: FC = () => {
	// const [deleteAccount] = useDeleteAccountMutation();
	// const router = useRouter();
	// const { data } = useGetSettingsProfileVisibilityQuery(null);

	// const handleDeleteAccount = (password: string) => {
	// 	console.log('handleDeleteAccount ', password);
	// 	deleteAccount(password)
	// 		.unwrap()
	// 		.then(() => {
	// 			toaster({
	// 				status: 'success',
	// 				title: 'Аккаунт успешно удален',
	// 			});
	// 			localStorage.clear();
	// 			router.push('/');
	// 		})
	// 		.catch((error) => {
	// 			console.log('Error status:', error);
	// 			toaster({
	// 				status: 'error',
	// 				title: 'Ошбка удаления аккаунта',
	// 				// subtitle: `${error.data?.current_password || 'Попробуйте еще раз'}`,
	// 			});
	// 		});
	// };

	const handleSubmitForm = (data: unknown) => {
		console.log('handleSubmit data', data);
	};

	return (
		<>
			<FormProfileSettings
				handleSubmitForm={handleSubmitForm}
				// handleDeleteAccount={handleDeleteAccount}
				// settingsProfile={data}
			/>
			<NotificationToastContainer />
		</>
	);
};
