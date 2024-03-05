'use client';

import React, { FC, useRef } from 'react';
import { FormSignup } from '@/entities/form-signup';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { userApi } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';

export const FormSignupFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);

	const [createUser, { isLoading, error }] = userApi.useCreateUserMutation();

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const setToken = (token: string) => {
		console.log('Капча пройдена. Токен:', token);
	};

	const handleSubmit = (data: IUser) => {
		console.log(data);
		console.log(isLoading);
		console.log(error);
		createUser(data);
	};

	return (
		<FormSignup
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
		/>
	);
};
