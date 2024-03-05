'use client';

import React, { FC, useRef } from 'react';
import { FormLogin } from '@/entities/form-login';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { IUser } from '@/services/models/IUser';
import { useAuthUserMutation } from '@/services/UserService';

export const FormLoginFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);

	const [authUser, { error }] = useAuthUserMutation();

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const setToken = (token: string) => {
		console.log('Капча пройдена. Токен:', token);
	};

	const handleSubmit = (userData: IUser) => {
		authUser(userData)
			.unwrap()
			.then((payload) => console.log('fulfilled', payload))
			.catch((error) => console.error('rejected', error));

		console.log('authUser error', error);
	};

	return (
		<FormLogin
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
		/>
	);
};
