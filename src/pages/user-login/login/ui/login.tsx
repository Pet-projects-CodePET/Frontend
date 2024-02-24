'use client';

import React from 'react';
import { FormLoginFeature } from '@/features/form-login/form-login';
import styles from './login.module.scss';

export const LoginPage = () => {
	return (
		<div className={styles.container}>
			<FormLoginFeature />
		</div>
	);
};
