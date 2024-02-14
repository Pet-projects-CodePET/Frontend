'use client';

import { FormSignup } from '@/features/ui/form-signup/form-signup';
import styles from './signup.module.scss';

export function Signup() {
	return (
		<div className={styles.container}>
			<FormSignup />
		</div>
	);
}
