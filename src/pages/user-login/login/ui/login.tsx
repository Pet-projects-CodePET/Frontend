'use client';

import { FormLoginFeature } from '@/features/form-login/form-login';
import React from 'react';
import styles from './login.module.scss';

export const LoginPage = () => {
	return (
		<div className={styles.container}>
			<FormLoginFeature />
		</div>
	);
};
