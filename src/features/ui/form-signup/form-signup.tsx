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
				<Input
					label="email"
					labelName="E-mail"
					placeholder="Введите e-mail"
					register={register}
					error={'Так выглядит ошибка'}
				/>
				<Input
					label="nickname"
					labelName="Никнейм"
					register={register}
					placeholder="Введите никнейм"
				/>
				<Input
					label="password"
					labelName="Пароль"
					register={register}
					placeholder="Введите пароль"
				/>
				<Input
					label="passworf-confirm"
					labelName="Пароль еще раз"
					placeholder="Введите пароль"
					register={register}
				/>
				<MainButton variant={'primary'} width={'max'}>
					{'Создать аккаунт'}
				</MainButton>
			</div>
		</Form>
	);
};
