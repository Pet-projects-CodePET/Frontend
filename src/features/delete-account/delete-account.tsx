'use client';

import React, { FC } from 'react';
import { useDeleteAccountMutation } from '@/services/UserService';
import {
	NotificationToastContainer,
	toaster,
} from '@/widgets/notification-toast';
import { useRouter } from 'next/navigation';
import { DeleteAccount } from '@/entities/delete-account';

export const DeleteAccountFeature: FC = () => {
	const [deleteAccount] = useDeleteAccountMutation();
	const router = useRouter();

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
				console.log('Error status:', error);
				toaster({
					status: 'error',
					title: 'Ошибка удаления аккаунта',
					// subtitle: `${error.data?.current_password || 'Попробуйте еще раз'}`,
				});
			});
	};
	return (
		<>
			<DeleteAccount handleDeleteAccount={handleDeleteAccount} />
			<NotificationToastContainer />
		</>
	);
};
