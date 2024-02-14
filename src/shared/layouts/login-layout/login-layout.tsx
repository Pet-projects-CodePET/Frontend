
import React from 'react';
import LogoIcon from '@/shared/assets/images/logo-var-3.svg';
import styles from './login-layout.module.scss';
import Link from 'next/link';

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<LogoIcon />
				</Link>
			</div>

			{children}
		</div>
	);
};
