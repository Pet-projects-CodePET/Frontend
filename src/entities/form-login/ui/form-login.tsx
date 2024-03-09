'use client';

import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { IconButtonList } from '@/entities/icon-button-list';
import { Input, MainButton } from '@/shared/ui';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import styles from './form-login.module.scss';
import type { FormLoginProps } from './types';
import { useFormContext } from 'react-hook-form';

export const FormFieldsLogin: FC<FormLoginProps> = ({
	onLoad,
	setToken,
	serverErrorText,
}) => {
	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	const {
		formState: { isValid, errors },
	} = useFormContext();

	return (
		<>
			<h1 className={styles.title}>Добро пожаловать!</h1>
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						name="email"
						labelName="E-mail"
						// placeholder="Введите e-mail"
						error={errors.email ? `${errors.email?.message}` : ''}
					/>
					<Input
						link={{
							text: 'Забыли пароль?',
							href: '/login/password-recovery',
						}}
						name="password"
						labelName="Пароль"
						type={'password'}
						// placeholder="Введите пароль"
						error={errors.password ? `${errors.password?.message}` : ''}
					/>
				</div>
				<HCaptcha
					sitekey={sitekey}
					onVerify={setToken}
					onLoad={onLoad}
					ref={captchaRef}
				/>
				<MainButton variant={'primary'} width={'max'} disabled={!isValid}>
					{'Войти'}
				</MainButton>
				<span className={styles.server_error}>{serverErrorText}</span>
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
		</>
	);
};
