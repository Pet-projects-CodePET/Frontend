'use client';

import { FormSignup } from '@/widgets/form-signup/ui/form-signup';
import styles from './signup.module.scss';

export function Signup() {
	const handleSubmit = () => console.log('Форма регистрации отправляет запрос');

	return (
		<div className={styles.container}>
			<FormSignup />
		</div>
	);
}
