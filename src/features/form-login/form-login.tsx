'use client';

import React, { FC, useRef, useState } from 'react';
import { FormLogin } from '@/entities/form-login';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { IUser } from '@/services/models/IUser';
import { useAuthUserMutation } from '@/services/UserService';
import { useRouter } from 'next/navigation';

export const FormLoginFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);

	const [authUser] = useAuthUserMutation();
	const router = useRouter();
	const [serverErrorText, setServerErrorText] = useState('');

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
			.then((payload) => {
				console.log('token', payload.auth_token);
				localStorage.setItem('token', payload.auth_token);
			})
			.then(() => {
				router.push('/');
			})
			.catch((error) => {
				setServerErrorText(error.data.non_field_errors);
			});
	};

	return (
		<FormLogin
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
			serverErrorText={serverErrorText}
		/>
	);
};
