'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
	useResetPasswordUserMutation,
	useAuthUserMutation,
} from '@/services/UserService';
import { IUser } from '@/services/models/IUser';
import { Form } from '@/shared/ui';
import { FormFieldsPasswordRecovery } from '@/entities/form-password-recovery';
import FormRecoveryPasswordSchema from '@/shared/utils/validation-schemas/form-recovery-password-schema';
import { useRouter } from 'next/navigation';

export const FormPasswordRecoveryFeature: FC = () => {
	const [isPasswordSend, setIsPasswordSend] = useState(false);

	const captchaRef = useRef<HCaptcha>(null);

	const [resetPasswordUser, { error }] = useResetPasswordUserMutation();
	const [authUser] = useAuthUserMutation();
	const router = useRouter();

	const [serverErrorText, setServerErrorText] = useState('');
	const [serverSuccessText, setServerSuccessText] = useState('');
	const [captchaVerified, setCaptchaVerified] = useState(false);

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const hCaptchaToken = (token: string) => {
		token && setCaptchaVerified(true);
	};

	const handlePasswordReSend = () => {
		setIsPasswordSend(false);
	};

	const handleSubmit = (userData: IUser) => {
		isPasswordSend
			? authUser(userData)
					.unwrap()
					.then((payload) => {
						console.log('token', payload.auth_token);
						localStorage.setItem('token', payload.auth_token as string);
					})
					.then(() => {
						router.push('/');
					})
					.catch((error) => {
						setServerErrorText(error.data?.non_field_errors);
					})
			: resetPasswordUser(userData)
					.unwrap()
					.then((payload) => {
						setServerSuccessText('На ваш e-mail был отправлен новый пароль');
						setIsPasswordSend(true);
						console.log('fulfilled', payload);
					})
					.catch((error) => {
						error.data[0] &&
							setServerErrorText(
								'Пользователь с такой электронной почтой не зарегистрирован'
							);
					});

		console.log('resetPasswordUser error', error);
	};

	return (
		<Form onSubmit={handleSubmit} schema={FormRecoveryPasswordSchema}>
			<FormFieldsPasswordRecovery
				onLoad={onLoad}
				setToken={hCaptchaToken}
				captchaVerified={captchaVerified}
				serverErrorText={serverErrorText}
				handlePasswordReSend={handlePasswordReSend}
				isPasswordSend={isPasswordSend}
				serverSuccessText={serverSuccessText}
			/>
		</Form>
	);
};
