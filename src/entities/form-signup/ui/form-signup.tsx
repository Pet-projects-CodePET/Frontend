'use client';

import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import type { FormSignupProps } from '@/entities/form-signup/ui/types';
import { IconButtonList } from '@/entities/icon-button-list';
import { Form, Input, MainButton } from '@/shared/ui';

import styles from './form-signup.module.scss';

export const FormSignup: FC<FormSignupProps> = ({
	onLoad,
	setToken,
	handleSubmit,
}) => {
	const { register } = useForm();

	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	return (
		<Form onSubmit={handleSubmit}>
			<h1 className={styles.title}>Создать аккаунт</h1>
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
						label="nickname"
						labelName="Никнейм"
						register={register}
						placeholder="Введите никнейм"
					/>
					<Input
						label="password"
						labelName="Пароль"
						type={'password'}
						register={register}
						placeholder="Введите пароль"
					/>
					<Input
						label="passworf-confirm"
						type={'password'}
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
			<div className={styles.container}>
				<span className={styles.iconsButtons_line}>или</span>
				<IconButtonList />
			</div>
			<div className={styles.container}>
				<p className={styles.text_login}>
					Уже есть аккаунт?&#160;
					<Link className={styles.link_login} href={'/login'}>
						Войти
					</Link>
				</p>
				<p className={styles.text_policy}>
					При создании аккаунта вы соглашаетесь с&#160;
					<Link className={styles.link_policy} href={'/login'}>
						политикой&#160;об&#160;использовании персональных данных
					</Link>
				</p>
			</div>
		</Form>
	);
};
