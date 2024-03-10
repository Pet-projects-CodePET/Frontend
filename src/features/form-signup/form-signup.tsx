'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import { userApi } from '@/services/UserService';
import { useCreateUserMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';
import { Form } from '@/shared/ui';
import { FormFieldsSignup } from '@/entities/form-signup/ui/form-signup';
import FormSignupSchema from '@/shared/utils/validation-schemas/form-signup-schema';

export const FormSignupFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);

	const [createUser, { error }] = useCreateUserMutation();
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [serverErrorText, setServerErrorText] = useState('');
	const [serverEmailError, setServerEmailError] = useState('');
	const [serverUsernameError, setServerUsernameError] = useState('');
	const [serverPasswordError, setServerPasswordError] = useState('');

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const hCaptchaToken = (token: string) => {
		token && setCaptchaVerified(true);
	};

	const handleSubmit = (userData: IUser) => {
		createUser(userData)
			.unwrap()
			.then((payload) => console.log('fulfilled', payload))
			.catch((error) => {
				setServerErrorText(error.data.non_field_errors);
				setServerEmailError(error.data.non_field_errors);
				setServerUsernameError(error.data.non_field_errors);
				setServerPasswordError(error.data.non_field_errors);
			});

		console.log('createUser error', error);
	};

	return (
		<Form
			onSubmit={handleSubmit}
			serverErrorText={serverErrorText}
			schema={FormSignupSchema}>
			<FormFieldsSignup
				onLoad={onLoad}
				setToken={hCaptchaToken}
				captchaVerified={captchaVerified}
				serverErrorText={serverErrorText}
				serverEmailError={serverEmailError}
				serverUsernameError={serverUsernameError}
				serverPasswordError={serverPasswordError}
			/>
		</Form>
	);
};
