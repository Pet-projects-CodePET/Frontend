'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MainButton } from '@/shared/ui';
import { useMediaQuery } from '@/shared/hooks';
import styles from './join-us.module.scss';

export const JoinUs = () => {
	const router = useRouter();
	const isMobile = useMediaQuery('(max-width: 779px)');

	return (
		<div className={styles.joinus}>
			<h4 className={styles.joinus__title}>Присоединяйся к нам!</h4>
			<p className={styles.joinus__text}>
				Создай свой проект, собери команду и&nbsp;стань на&nbsp;шаг ближе
				к&nbsp;мечте
			</p>
			<MainButton
				variant="primary"
				width={isMobile ? 'max' : 'regular'}
				onClick={() => router.push('registration')}>
				Зарегистрироваться
			</MainButton>
		</div>
	);
};
