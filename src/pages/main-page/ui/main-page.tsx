import React from 'react';
import Link from 'next/link';
import { Header } from '@/widgets/header';
import { MainButton } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import styles from './main-page.module.scss';

export const MainPage = () => {
	return (
		<>
			<div className={styles.mainContainer}>
				<Header isLoggedIn />
				<div>CodePET FRONTEND</div>
				<br />
				<Link href="/login">
					<MainButton variant="primary" width="regular">
						Login
					</MainButton>
				</Link>
				<br />
				<br />
				<Link href="/registration">
					<MainButton variant="primary" width="regular">
						Registration
					</MainButton>
				</Link>
				<br />
			</div>
			<Footer />
		</>
	);
};
