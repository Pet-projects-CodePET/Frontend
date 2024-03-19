import React from 'react';
import { SideNav } from '@/entities/side-nav';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import styles from './profile-navigation.module.scss';
export const ProfileNavigation = () => {
	return (
		<>
			<div className={styles.container}>
				<Header isLoggedIn />
				<h2 className={styles.title}>Личный кабинет</h2>
				<div className={styles.sideNav}>
					<SideNav />
				</div>
			</div>
			<Footer />
		</>
	);
};
