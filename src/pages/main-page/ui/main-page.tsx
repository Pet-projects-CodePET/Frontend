import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Promo } from '@/widgets/navBar/ui/promo/promo';
import styles from './main-page.module.scss';
import { JoinUs } from '@/widgets/join-us';

export const MainPage = () => {
	return (
		<>
			<div className={styles.mainContainer}>
				<Header isLoggedIn />
				<div className={styles.promoSection}>
					<Promo />
				</div>
				<div className={styles.joinUsSection}>
					<JoinUs />
				</div>
			</div>
			<Footer />
		</>
	);
};
