'use client';

import React, { FC, useRef } from 'react';
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
	// errorText,
}) => {
	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	return (
		<Form onSubmit={handleSubmit}>
			<h1 className={styles.title}>Создать аккаунт</h1>
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						name="email"
						labelName="E-mail"
						// placeholder="Введите e-mail"
						error={'Так выглядит ошибка'}
					/>
					<Input
						name="username"
						labelName="Никнейм"
						// placeholder="Введите никнейм"
					/>
					<Input
						name="password"
						labelName="Пароль"
						type={'password'}
						// placeholder="Введите пароль"
					/>
					<Input
						name="re_password"
						type={'password'}
						labelName="Пароль еще раз"
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
					{'Создать аккаунт'}
				</MainButton>
				{/* <span>{errorText}</span> */}
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
