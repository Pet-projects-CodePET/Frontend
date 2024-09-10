'use client';

import { CurrentProjects } from '@/widgets/current-projects';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { JoinUs } from '@/widgets/join-us';
import { Promo } from '@/widgets/promo';
import React, { useEffect, useState } from 'react';
import styles from './main-page.module.scss';
import { useRouter } from 'next/navigation';
import { useGetSkillsQuery } from '@/services/AttributesService';

export const MainPage = () => {
	// const { isSuccess: isLoggedIn } = useGetUserMeQuery(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const { 1: urlToken } = window.location.hash.split('#/login/');
		if (urlToken) {
			localStorage.setItem('token', urlToken);
		}

		const token = localStorage.getItem('token');
		if (token) {
			setIsLoggedIn(true);
		}

		router.push('/');
	}, [router]);

	const {data: skills} = useGetSkillsQuery([]) 

	if (!skills) {
		console.table(skills)
	}

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
				<div className={styles.joinUsSection}>{!isLoggedIn && <JoinUs />}</div>
			</div>
			<Footer />
		</>
	);
};
