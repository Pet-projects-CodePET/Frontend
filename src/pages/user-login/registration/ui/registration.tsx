'use client';

import React from 'react';
import { FormSignup } from '@/features/ui/form-signup/form-signup';
import styles from './signup.module.scss';

export const Signup = () => {
	return (
		<div className={styles.container}>
			<FormSignup />
		</div>
	);
}
