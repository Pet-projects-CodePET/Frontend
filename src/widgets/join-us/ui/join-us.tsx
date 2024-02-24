'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MainButton } from '@/shared/ui';
// import { Montserrat } from '@next/font/google';
import styles from './join-us.module.scss';

export const JoinUs = () => {
	const router = useRouter();
	return (
		<div className={styles.joinus}>
			<h2 className={styles.joinus__title}>Присоединяйся к нам!</h2>
			<p className={styles.joinus__text}>
				Создай свой проект, собери команду и&nbsp;стань на&nbsp;шаг ближе
				к&nbsp;мечте
			</p>
			<MainButton
				variant="primary"
				width="regular"
				onClick={() => router.push('registration')}>
				Зарегистрироваться
			</MainButton>
		</div>
	);
};
