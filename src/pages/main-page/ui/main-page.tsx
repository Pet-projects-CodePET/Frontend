import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Promo } from '@/widgets/navBar/ui/promo/promo';
import styles from './main-page.module.scss';

export const MainPage = () => {
	return (
		<>
			<div className={styles.mainContainer}>
				<Header isLoggedIn />
				<div className={styles.promoSection}>
					<Promo />
				</div>
			</div>
			<Footer />
		</>
	);
};