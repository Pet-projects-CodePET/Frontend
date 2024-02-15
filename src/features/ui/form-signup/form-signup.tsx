'use client';

import { IconButtonList } from '@/entities/iconButtonList';
import { Form, Input, MainButton } from '@/shared/ui';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Link from 'next/link';

import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form-signup.module.scss';

export const FormSignup: FC = ({}) => {
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
			<div className={styles.form_container}>
				<h1 className={styles.title}>Создать аккаунт</h1>
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
				</div>
				<HCaptcha
					sitekey={sitekey}
					onVerify={setToken}
					onLoad={onLoad}
					ref={captchaRef}
				/>
				<MainButton variant={'primary'} width={'max'}>
					{'Создать аккаунт'}
				</MainButton>
			</div>
			<div className={styles.iconsButtons_container}>
				<span className={styles.iconsButtons_line}>или</span>
				<IconButtonList />
			</div>
			<div className={styles.iconsButtons_container}>
				<div>
					<p>Уже есть аккаунт?</p>
					<Link href={'/login'}>Войти</Link>
				</div>
				<div>
					<p>
						При создании аккаунта вы соглашаетесь с&#160;
						<Link href={'/login'}>
							политикой об использовании персональных данных
						</Link>
					</p>
				</div>
			</div>
		</Form>
	);
};
