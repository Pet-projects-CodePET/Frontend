'use client';

import React from 'react';
import { MainButton } from '@/shared/ui';
import styles from './join-us.module.scss';

export const JoinUs = () => {
	return (
		<div className={styles.joinus}>
			<h2 className={styles.joinus__title}>Присоединяйся к нам!</h2>
			<p className={styles.joinus__text}>
				Создай свой проект, собери команду и&nbsp;стань на&nbsp;шаг ближе
				к&nbsp;мечте
			</p>
			<MainButton variant="primary" width="regular">
				Зарегистрироваться
			</MainButton>
		</div>
	);
};
