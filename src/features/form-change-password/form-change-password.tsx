'use client';

import React, { useState, FC } from 'react';
import { Form } from '@/shared/ui';
import { FormChangePassword } from '@/entities/form-change-password';
import FormChangePasswordSchema from '@/shared/utils/validation-schemas/form-change-password-schema';
import { useChangePasswordMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';
import {
	NotificationToastContainer,
	toaster,
} from '@/widgets/notification-toast/';
import styles from './form-change-password.module.scss';

export const FormChangePasswordFeature: FC = () => {
	const [changePassword, { error }] = useChangePasswordMutation();
	const [serverErrorText, setServerErrorText] = useState('');

	const handleSubmit = ({ newPassword, password }: IUser) => {
		changePassword({ newPassword, password })
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Пароль успешно изменен',
				});
			})
			.catch((error) => {
				console.log('error', error);
				setServerErrorText(error.data?.non_field_errors || 'Сервис недоступен');
				toaster({
					status: 'error',
					title: 'Ошибка авторизации',
					subtitle: `${serverErrorText || 'Сервис недоступен'}`,
				});
			});

		console.log('change password', error);
	};

	const [serverPasswordError, setServerPasswordError] = useState('');
	return (
		<Form
			onSubmit={handleSubmit}
			className={styles.formSettings}
			schema={FormChangePasswordSchema}>
			<FormChangePassword
				serverPasswordError={serverPasswordError}
				setServerPasswordError={setServerPasswordError as () => string}
			/>
			<NotificationToastContainer />
		</Form>
	);
};
