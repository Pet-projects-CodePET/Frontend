'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useResetPasswordUserMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';
import { Form } from '@/shared/ui';
import { FormFieldsPasswordRecovery } from '@/entities/form-password-recovery';
import FormRecoveryPasswordSchema from '@/shared/utils/validation-schemas/form-recovery-password-schema';

export const FormPasswordRecoveryFeature: FC = () => {
	const [isPasswordSend, setIsPasswordSend] = useState(false);

	const captchaRef = useRef<HCaptcha>(null);

	const [resetPasswordUser, { error }] = useResetPasswordUserMutation();

	const [serverErrorText, setServerErrorText] = useState('');
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
		resetPasswordUser(userData)
			.unwrap()
			.then((payload) => console.log('fulfilled', payload))
			.catch((error) => {
				setServerErrorText(error.data.non_field_errors);
			});

		console.log('resetPasswordUser error', error);
	};

	return (
		<Form
			onSubmit={handleSubmit}
			serverErrorText={serverErrorText}
			schema={FormRecoveryPasswordSchema}>
			<FormFieldsPasswordRecovery
				onLoad={onLoad}
				setToken={hCaptchaToken}
				captchaVerified={captchaVerified}
				serverErrorText={serverErrorText}
				handlePasswordReSend={handlePasswordReSend}
				isPasswordSend={isPasswordSend}
			/>
		</Form>
	);
};
