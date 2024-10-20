'use client';

import React, { useState, FC } from 'react';
import { Form } from '@/shared/ui';
import { FormChangePassword } from '@/entities/form-change-password';
import FormChangePasswordSchema from '@/shared/utils/validation-schemas/form-change-password-schema';
import { useChangePasswordMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';
import {
	// NotificationToastContainer,
	toaster,
} from '@/widgets/notification-toast/';
import styles from './form-change-password.module.scss';

export const FormChangePasswordFeature: FC = () => {
	const [changePassword] = useChangePasswordMutation();
	const [isSubmitSuccessfulReset, setSubmitSuccessfulReset] = useState(false);
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

	const handleSubmit = ({ newPassword, password }: IUser) => {
		setIsSubmitDisabled(true);
		changePassword({ newPassword, password })
			.unwrap()
			.then(() => {
				toaster({
					status: 'success',
					title: 'Пароль успешно изменен',
				});
				setSubmitSuccessfulReset(true);
			})

			.catch((error) => {
				console.log('error', error);
				toaster({
					status: 'error',
					title: 'Ошибка',
					subtitle: `${error.data?.current_password || error.data?.new_password || 'Попробуйте еще раз'}`,
				});
			})
			.finally(() => {
				setIsSubmitDisabled(false);
			});
	};

	const [serverPasswordError, setServerPasswordError] = useState('');
	return (
		<>
			<Form
				onSubmit={handleSubmit}
				className={styles.formSettings}
				schema={FormChangePasswordSchema}>
				<FormChangePassword
					serverPasswordError={serverPasswordError}
					setServerPasswordError={setServerPasswordError as () => string}
					isSubmitSuccessfulReset={isSubmitSuccessfulReset}
					isSubmitDisabled={isSubmitDisabled}
					setSubmitSuccessfulReset={setSubmitSuccessfulReset}
				/>
			</Form>
			{/* <NotificationToastContainer /> */}
		</>
	);
};
