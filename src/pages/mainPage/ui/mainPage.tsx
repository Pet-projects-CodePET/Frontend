import React from 'react';
import { Header } from '@/widgets/header';
import { Promo } from '@/widgets/navBar/ui/promo/promo';

import styles from './main-page.module.scss';

export const MainPage = () => {
	return (
		<main className={styles.mainContainer}>
			<Header isLoggedIn />
			<div className={styles.promoSection}>
				<Promo />
			</div>
		</main>
	);
};
