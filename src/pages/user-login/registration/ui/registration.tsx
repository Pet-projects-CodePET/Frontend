'use client';

import React from 'react';
import { FormSignupFeature } from '@/features/form-signup/form-signup';
import styles from './signup.module.scss';

export const SignupPage = () => {
	return (
		<div className={styles.container}>
			<FormSignupFeature />
		</div>
	);
};
