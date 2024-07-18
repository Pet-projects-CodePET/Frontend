'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MainButton } from '@/shared/ui';
import styles from './join-us.module.scss';

export const JoinUs = () => {
	const router = useRouter();
	return (
		<div className={styles['join-us']}>
			<h4 className={styles['join-us-title']}>Присоединяйся к нам!</h4>
			<p className={styles['join-us-description']}>
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
