'use client';

import styles from './signup.module.scss';
import Form from '@/shared/ui/form/form';

export function Signup() {
	const handleSubmit = () => console.log('Форма регистрации отправляет запрос');

	return (
		<div className={styles.container}>
			<Form onSubmit={handleSubmit}>Форма регистрации</Form>
		</div>
	);
}
