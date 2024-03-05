'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FormPasswordRecovery } from '@/entities/form-password-recovery';
import { useResetPasswordUserMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';

export const FormPasswordRecoveryFeature: FC = () => {
	const [isPasswordSend, setIsPasswordSend] = useState(false);

	const captchaRef = useRef<HCaptcha>(null);

	const [resetPasswordUser, { error }] = useResetPasswordUserMutation();

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const setToken = (token: string) => {
		console.log('Капча пройдена. Токен:', token);
	};

	const handlePasswordReSend = () => {
		setIsPasswordSend(false);
	};

	const handleSubmit = (userData: IUser) => {
		resetPasswordUser(userData)
			.unwrap()
			.then((payload) => console.log('fulfilled', payload))
			.catch((error) => console.error('rejected', error));

		console.log('resetPasswordUser error', error);
	};

	return (
		<FormPasswordRecovery
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
			handlePasswordReSend={handlePasswordReSend}
			isPasswordSend={isPasswordSend}
		/>
	);
};
