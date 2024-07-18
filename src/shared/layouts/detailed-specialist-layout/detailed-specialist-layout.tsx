'use client';
import React, { useEffect, useState } from 'react';
import styles from './detailed-specialist-layout.module.scss';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const DetailedSpecialistLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const { 1: urlToken } = window.location.hash.split('#/login/');
		if (urlToken) {
			localStorage.setItem('token', urlToken);
		}

		const token = localStorage.getItem('token');
		if (token) {
			setIsLoggedIn(true);
		}
	}, []);
	return (
		<>
			<section className={styles.pageContainer}>
				<Header isLoggedIn={isLoggedIn} />

				{children}
			</section>
			<Footer />
		</>
	);
};
