'use client';

import React, { FC, useRef } from 'react';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { IconButtonList } from '@/entities/icon-button-list';
import { Input, MainButton } from '@/shared/ui';

import styles from './form-password-recovery.module.scss';
import type { FormPasswordRecoveryProps } from './types';
import { useFormContext } from 'react-hook-form';

export const FormFieldsPasswordRecovery: FC<FormPasswordRecoveryProps> = ({
	isPasswordSend,
	handlePasswordReSend,
	serverErrorText,
	captchaVerified,
	serverSuccessText,
	onLoad,
	setToken,
}) => {
	const captchaRef = useRef<HCaptcha>(null);
	const sitekey: string = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '';

	const {
		formState: { isValid, errors },
	} = useFormContext();

	return (
		<>
			<h1 className={styles.title}>Восстановление пароля</h1>
			{isPasswordSend && (
				<p className={styles.title_message}>{serverSuccessText}</p>
			)}
			<div className={styles.container}>
				<div className={styles.input_list}>
					<Input
						name="email"
						labelName="E-mail"
						// placeholder="Введите e-mail"
						error={errors.email ? `${errors.email?.message}` : ''}
						description={!isPasswordSend}
						descrText={'На указанную почту придет пароль'}
					/>
					{isPasswordSend && (
						<Input
							name="password"
							labelName="Пароль"
							type={'password'}
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
				<MainButton
					variant={'primary'}
					width={'max'}
					disabled={!captchaVerified || !isValid}>
					{!isPasswordSend ? 'Восстановить пароль' : 'Войти'}
				</MainButton>
				<span className={styles.server_error}>{serverErrorText}</span>
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
		</>
	);
};
