import React from 'react';
import LogoIcon from '@/shared/assets/images/logo-var-3.svg';
import styles from './login-layout.module.scss';
import Link from 'next/link';

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/" className={styles.logo__link}>
					<LogoIcon alt="logo" className={styles.logo__icon} />
				</Link>
			</div>

			{children}
		</div>
	);
};
