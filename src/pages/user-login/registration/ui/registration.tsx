'use client';

import { FormSignupFeature } from '@/features/form-signup/form-signup';
import React from 'react';
import styles from './signup.module.scss';

export const SignupPage = () => {
	return (
		<div className={styles.container}>
			<FormSignupFeature />
		</div>
	);
};
