'use client';

import React from 'react';
import styles from './signup.module.scss';
import Form from '@/shared/ui/form/form';

export const Signup = () => {
	const handleSubmit = () => console.log('Форма регистрации отправляет запрос');

	return (
		<div className={styles.container}>
			<Form onSubmit={handleSubmit}>Форма регистрации</Form>
		</div>
	);
};
