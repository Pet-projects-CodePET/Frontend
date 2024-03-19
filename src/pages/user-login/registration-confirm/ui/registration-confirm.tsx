'use client';

import React from 'react';
import { FormSignupConfirmFeature } from '@/features/form-signup-confirm/form-signup-confirm';
import styles from './signup.module.scss';

export const SignupConfirmPage = () => {
	return (
		<div className={styles.container}>
			<FormSignupConfirmFeature />
		</div>
	);
};
