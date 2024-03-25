import React from 'react';
import { FormPasswordRecoveryFeature } from '@/features';
import styles from './password-recovery.module.scss';

export const PasswordRecoveryPage = () => {
	return (
		<div className={styles.container}>
			<FormPasswordRecoveryFeature />
		</div>
	);
};
