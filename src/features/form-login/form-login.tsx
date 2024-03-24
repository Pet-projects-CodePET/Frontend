'use client';

import React, { FC, useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { IUser } from '@/services/models/IUser';
import { useAuthUserMutation } from '@/services/UserService';
import { useRouter } from 'next/navigation';
import { FormFieldsLogin } from '@/entities/form-login';
import { Form } from '@/shared/ui';
import FormLoginSchema from '@/shared/utils/validation-schemas/form-login-schema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationBanner } from '@/shared/ui';

export const FormLoginFeature: FC = () => {
	const captchaRef = useRef<HCaptcha>(null);

	const [authUser] = useAuthUserMutation();

	const router = useRouter();
	const [serverErrorText, setServerErrorText] = useState('');
	const [captchaVerified, setCaptchaVerified] = useState(false);

	const onLoad = () => {
		const executePayload = { async: true };
		captchaRef.current?.execute(executePayload);
	};

	const hCaptchaToken = (token: string) => {
		token && setCaptchaVerified(true);
	};

	// ----------------------
	const toaster = (myProps, toastProps) =>
		toast(<NotificationBanner {...myProps} />, { ...toastProps });

	const handleSubmit = (userData: IUser) => {
		authUser(userData)
			.unwrap()
			.then((payload) => {
				toast.success('логинимся...');
				console.log('token', payload.auth_token);
				localStorage.setItem('token', payload.auth_token as string);
			})
			.then(() => {
				router.push('/');
			})
			.catch((error) => {
				console.log('error.data.non_field_errors', error.data.non_field_errors);
				setServerErrorText(error.data.non_field_errors);
				toaster(
					{
						title: 'errorrr!!!',
						subtitle: `${error.data.non_field_errors}` || 'Что-то пошло не так, попробуйте еще раз' ,
					},
					{}
				);
			});
	};

	return (
		<Form onSubmit={handleSubmit} schema={FormLoginSchema}>
			<FormFieldsLogin
				onLoad={onLoad}
				setToken={hCaptchaToken}
				captchaVerified={captchaVerified}
				serverErrorText={serverErrorText}
			/>
			<ToastContainer position="bottom-right" autoClose={false} />
		</Form>
	);
};
