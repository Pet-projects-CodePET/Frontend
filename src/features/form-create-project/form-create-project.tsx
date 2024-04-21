'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import { userApi } from '@/services/UserService';
import { useCreateUserMutation } from '@/services/UserService';
import { IUser } from '@/services/models/IUser';
import { Form } from '@/shared/ui';
import FormSignupSchema from '@/shared/utils/validation-schemas/form-signup-schema';
import { useRouter } from 'next/navigation';
import { FormFieldsCreateProject } from '@/entities/form-create-project';

export const FormCreateProjectFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);
	const router = useRouter();

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
		localStorage.setItem('userData', JSON.stringify(userData));
		createUser(userData)
			.unwrap()
			.then(() => router.push('registration/confirm'))
			.catch((error) => {
				console.log(error.data);
				setServerErrorText(error.data?.non_field_errors || '');
				setServerEmailError(error.data?.email);
				setServerUsernameError(error.data?.username);
				setServerPasswordError(error.data?.password);
			});

		console.log('createUser error', error);
	};

	return (
		<Form onSubmit={handleSubmit} schema={FormSignupSchema}>
			<FormFieldsCreateProject
				onLoad={onLoad}
				setToken={hCaptchaToken}
				captchaVerified={captchaVerified}
				serverErrorText={serverErrorText}
				serverEmailError={serverEmailError}
				serverUsernameError={serverUsernameError}
				serverPasswordError={serverPasswordError}
				setServerEmailError={setServerEmailError as () => string}
				setServerUsernameError={setServerUsernameError as () => string}
				setServerPasswordError={setServerPasswordError as () => string}
			/>
		</Form>
	);
};
