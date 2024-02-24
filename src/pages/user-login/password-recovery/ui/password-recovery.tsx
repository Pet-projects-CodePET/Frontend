import { FormPasswordRecoveryFeature } from '@/features/form-password-recovery/form-password-recovery';
import React from 'react';
import styles from './password-recovery.module.scss';

export const PasswordRecoveryPage = () => {
	return (
		<div className={styles.container}>
			<FormPasswordRecoveryFeature />
		</div>
	);
};
