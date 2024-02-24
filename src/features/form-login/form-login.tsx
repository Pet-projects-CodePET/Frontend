'use client';

import { FormLogin } from '@/entities/form-login';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, { FC, useRef } from 'react';

export const FormLoginFeature: FC = ({}) => {
	const captchaRef = useRef<HCaptcha>(null);

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const setToken = (token: string) => {
		console.log('Капча пройдена. Токен:', token);
	};

	const handleSubmit = (data: unknown) => {
		console.log(data);
	};

	return (
		<FormLogin
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
		/>
	);
};
