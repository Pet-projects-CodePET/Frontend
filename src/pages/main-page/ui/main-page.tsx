'use client';

import { CurrentProjects } from '@/widgets/current-projects'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { JoinUs } from '@/widgets/join-us'
import { Promo } from '@/widgets/promo'
import React from 'react'
import styles from './main-page.module.scss'
import { useGetUserMeQuery } from '@/services/UserService'
// import { usePathname } from 'next/navigation';

export const MainPage = () => {
	const { isSuccess: isLoggedIn } = useGetUserMeQuery(null);

	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const token = localStorage.getItem('token');
	// if (token) {
	// 	setIsLoggedIn(true);
	// }

	// const path = usePathname();
	//
	// if (path?.endsWith(/([\d.]+)/)) console.log('работает');

	return (
		<>
			<div className={styles.mainContainer}>
				<Header isLoggedIn={isLoggedIn} />
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
