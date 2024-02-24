'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { FormPasswordRecovery } from '@/entities/form-password-recovery';

export const FormPasswordRecoveryFeature: FC = () => {
	const [isPasswordSend, setIsPasswordSend] = useState(false);

	const captchaRef = useRef<HCaptcha>(null);

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const setToken = (token: string) => {
		console.log('Капча пройдена. Токен:', token);
	};

	const handlePasswordSend = () => {
		setIsPasswordSend(true);
	};

	const handlePasswordReSend = () => {
		setIsPasswordSend(false);
	};

	const handleSubmit = (data: unknown) => {
		handlePasswordSend();
		console.log(data);
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
