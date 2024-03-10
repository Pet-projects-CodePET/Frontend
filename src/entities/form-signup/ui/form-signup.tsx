'use client';

import React, { FC, useRef } from 'react';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import type { FormSignupProps } from '@/entities/form-signup/ui/types';
import { IconButtonList } from '@/entities/icon-button-list';
import { Input, MainButton } from '@/shared/ui';

import styles from './form-signup.module.scss';
import { useFormContext } from 'react-hook-form';

export const FormFieldsSignup: FC<FormSignupProps> = ({
	onLoad,
	setToken,
	captchaVerified,
	serverErrorText,
	serverEmailError,
	serverUsernameError,
	serverPasswordError,
}) => {
	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	const {
		formState: { isValid, errors },
	} = useFormContext();

	return (
		<>
			<h1 className={styles.title}>Создать аккаунт</h1>
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						name="email"
						labelName="E-mail"
						// placeholder="Введите e-mail"
						error={errors.email ? `${errors.email?.message}` : serverEmailError}
					/>
					<Input
						name="username"
						labelName="Никнейм"
						// placeholder="Введите никнейм"
						// error = {clientError || serverError}
						error={
							errors.username
								? `${errors.username?.message}`
								: serverUsernameError
						}
					/>
					<Input
						name="password"
						labelName="Пароль"
						type={'password'}
						// placeholder="Введите пароль"
						error={
							errors.password
								? `${errors.password?.message}`
								: serverPasswordError
						}
					/>
					<Input
						name="re_password"
						type={'password'}
						labelName="Пароль еще раз"
						// placeholder="Введите пароль"
						error={
							errors.re_password
								? `${errors.re_password?.message}`
								: serverPasswordError
						}
					/>
				</div>
				<HCaptcha
					sitekey={sitekey}
					onVerify={setToken}
					onLoad={onLoad}
					ref={captchaRef}
				/>
				<MainButton
					variant={'primary'}
					width={'max'}
					disabled={!captchaVerified || !isValid}>
					{'Создать аккаунт'}
				</MainButton>
				<span className={styles.server_error}>{serverErrorText}</span>
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
		</>
	);
};
