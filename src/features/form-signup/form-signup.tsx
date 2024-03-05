'use client';

import React, { FC, useRef } from 'react';
import { FormSignup } from '@/entities/form-signup';
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import { userApi } from '@/services/UserService';
import { useCreateUserMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';

export const FormSignupFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);

	const [createUser, { error }] = useCreateUserMutation();

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const setToken = (token: string) => {
		console.log('Капча пройдена. Токен:', token);
	};

	const handleSubmit = (userData: IUser) => {
		createUser(userData)
			.unwrap()
			.then((payload) => console.log('fulfilled', payload))
			.catch((error) => console.error('rejected', error));

		console.log('createUser error', error);
	};

	return (
		<FormSignup
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
			// errorText={error}
		/>
	);
};
