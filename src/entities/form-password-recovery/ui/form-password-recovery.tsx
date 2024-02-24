'use client';

import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { IconButtonList } from '@/entities/icon-button-list';
import { Form, Input, MainButton } from '@/shared/ui';

import styles from './form-password-recovery.module.scss';
import type { FormPasswordRecoveryProps } from './types';

export const FormPasswordRecovery: FC<FormPasswordRecoveryProps> = ({
	isPasswordSend,
	handlePasswordReSend,
	onLoad,
	setToken,
	handleSubmit,
}) => {
	const { register } = useForm();

	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	return (
		<Form onSubmit={handleSubmit}>
			<h1 className={styles.title}>Восстановление пароля</h1>
			{isPasswordSend && (
				<p className={styles.title_message}>
					На ваш e-mail был отправлен новый пароль
				</p>
			)}
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						label="email"
						labelName="E-mail"
						// placeholder="Введите e-mail"
						register={register}
						error={'Так выглядит ошибка'}
					/>
					{isPasswordSend && (
						<Input
							label="password"
							labelName="Пароль"
							type={'password'}
							register={register}
							// placeholder="Введите пароль"
						/>
					)}
				</div>
				{!isPasswordSend && (
					<HCaptcha
						sitekey={sitekey}
						onVerify={setToken}
						onLoad={onLoad}
						ref={captchaRef}
					/>
				)}
				<MainButton variant={'primary'} width={'max'}>
					{!isPasswordSend ? 'Восстановить пароль' : 'Войти'}
				</MainButton>
			</div>
			{!isPasswordSend ? (
				<>
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
						<p className={styles.text_policy}>
							При создании аккаунта вы соглашаетесь с&#160;
							<Link className={styles.link_policy} href={'/login'}>
								политикой&#160;об&#160;использовании персональных данных
							</Link>
						</p>
					</div>
				</>
			) : (
				<Link
					className={styles.link_registration}
					href={'/login/password-recovery'}
					onClick={handlePasswordReSend}>
					Отправить пароль повторно
				</Link>
			)}
		</Form>
	);
};
