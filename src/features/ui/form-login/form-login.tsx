'use client';

import { IconButtonList } from '@/entities/iconButtonList';
import { Form, Input, MainButton } from '@/shared/ui';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Link from 'next/link';

import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form-login.module.scss';

export const FormLogin: FC = ({}) => {
	const { register } = useForm();

	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	console.log(sitekey);

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
		<Form onSubmit={handleSubmit}>
			<h1 className={styles.title}>Добро пожаловать</h1>
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						label="email"
						labelName="E-mail"
						placeholder="Введите e-mail"
						register={register}
						error={'Так выглядит ошибка'}
					/>
					<Input
						link={{ text: 'Забыли пароль?', href: '/login/password-recovery' }}
						label="password"
						labelName="Пароль"
						type={'password'}
						register={register}
						placeholder="Введите пароль"
					/>
				</div>
				<HCaptcha
					sitekey={sitekey}
					onVerify={setToken}
					onLoad={onLoad}
					ref={captchaRef}
				/>
				<MainButton variant={'primary'} width={'max'}>
					{'Войти'}
				</MainButton>
			</div>
			<div className={styles.container}>
				<span className={styles.iconsButtons_line}>или</span>
				<IconButtonList />
			</div>
			<div className={styles.container}>
				<p className={styles.text_registration}>
					Нет аккаунта?&#160;
					<Link className={styles.link_registration} href={'/registration'}>
						Зарегистрироваться
					</Link>
				</p>
			</div>
		</Form>
	);
};
