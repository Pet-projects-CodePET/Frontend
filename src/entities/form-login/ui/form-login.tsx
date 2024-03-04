'use client';

import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { IconButtonList } from '@/entities/icon-button-list';
import { Form, Input, MainButton } from '@/shared/ui';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import styles from './form-login.module.scss';
import type { FormLoginProps } from './types';

export const FormLogin: FC<FormLoginProps> = ({
	onLoad,
	setToken,
	handleSubmit,
}) => {
	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	return (
		<Form onSubmit={handleSubmit}>
			<h1 className={styles.title}>Добро пожаловать!</h1>
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						name="email"
						labelName="E-mail"
						// placeholder="Введите e-mail"
						error={'Так выглядит ошибка'}
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
