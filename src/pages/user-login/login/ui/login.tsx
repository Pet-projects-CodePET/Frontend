'use client';

import React from 'react';
import { FormLogin } from '@/features/ui/form-login/form-login';
import styles from './login.module.scss';

export const Login = () => {
	return (
		<div className={styles.container}>
			<FormLogin />
		</div>
	);
}
