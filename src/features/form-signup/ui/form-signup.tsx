'use client';

import { Form, Input, MainButton } from '@/shared/ui';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form-signup.module.scss';

interface FormSignupProps {}

export const FormSignup: FC<FormSignupProps> = ({}) => {
	const { register } = useForm();

	const handleSubmit = (data: unknown) => {
		console.log(data);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h1 className={styles.title}>Добро пожаловать</h1>
			<div className={styles.input_list}>
				<Input label="email" labelName="E-mail" register={register} />
				<Input label="nickname" labelName="Никнейм" register={register} />
				<Input label="password" labelName="Пароль" register={register} />
				<Input
					label="passworf-confirm"
					labelName="Пароль еще раз"
					register={register}
				/>
				<MainButton variant={'primary'} width={'max'}>
					{'Создать аккаунт'}
				</MainButton>
			</div>
		</Form>
	);
};
