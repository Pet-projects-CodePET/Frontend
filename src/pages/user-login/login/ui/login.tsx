'use client';

import React from 'react';
import { FormLoginFeature } from '@/features';
import styles from './login.module.scss';

export const LoginPage = () => {
	return (
		<div className={styles.container}>
			<FormLoginFeature />
		</div>
	);
};
