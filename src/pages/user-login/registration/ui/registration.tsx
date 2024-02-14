'use client';

import React from 'react';
import { FormSignup } from '@/widgets/form-signup/ui/form-signup';
import styles from './signup.module.scss';

export const Signup = () => {
	return (
		<div className={styles.container}>
			<FormSignup />
		</div>
	);
}
