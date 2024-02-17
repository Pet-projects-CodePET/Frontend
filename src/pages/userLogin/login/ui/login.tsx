'use client';

import { FormLogin } from '@/features/ui/form-login/form-login';
import styles from './login.module.scss';

export function Login() {
	const handleSubmit = () => console.log('Форма входа отправляет запрос');

	return (
		<div className={styles.container}>
			<FormLogin />
		</div>
	);
}
