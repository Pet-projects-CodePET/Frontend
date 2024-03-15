'use client';

import React, { FC } from 'react';

import styles from './form-signup-confirm.module.scss';

interface IFormSignupConfirm {
	secondsRemaining: number;
}

export const SignupConfirm: FC<IFormSignupConfirm> = ({ secondsRemaining }) => {
	const { email } = JSON.parse(localStorage.getItem('userData') as string);
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Подтвердите почту</h1>
				<p className={styles.text}>
					Мы отправили письмо на почту&#160;
					<strong>{email}</strong>
				</p>
				<p className={styles.text}>
					Проверьте свою почту и пройдите по ссылке, чтобы завершить регистрацию
				</p>
				<button disabled={secondsRemaining > 0} className={styles.link}>
					Отправить ссылку повторно
					{secondsRemaining > 0 && ` через ${secondsRemaining} сек.`}
				</button>
			</div>
		</>
	);
};
