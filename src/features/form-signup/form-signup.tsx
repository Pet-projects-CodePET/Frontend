'use client';

import React, { FC, useRef } from 'react';
import { FormSignup } from '@/entities/form-signup';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export const FormSignupFeature: FC = () => {
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
		<FormSignup
			onLoad={onLoad}
			setToken={setToken}
			handleSubmit={handleSubmit}
		/>
	);
};
