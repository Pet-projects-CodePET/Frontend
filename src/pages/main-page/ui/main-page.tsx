import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Promo } from '@/widgets/promo';
import { CurrentProjects } from '@/widgets/current-projects';
import { JoinUs } from '@/widgets/join-us';
import styles from './main-page.module.scss';

export const MainPage = () => {
	return (
		<>
			<div className={styles.mainContainer}>
				<Header isLoggedIn={true} />
				<div className={styles.promoSection}>
					<Promo />
				</div>
				<section className={styles.currentProjectsContainer}>
					<CurrentProjects />
				</section>
				<div className={styles.joinUsSection}>
					<JoinUs />
				</div>
			</div>
			<Footer />
		</>
	);
};
