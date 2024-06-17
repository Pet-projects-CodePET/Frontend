import React from 'react';
import styles from './detailed-specialist-layout.module.scss';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export const DetailedSpecialistLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<section className={styles.pageContainer}>
				<Header isLoggedIn={true} />

				{children}
			</section>
			<Footer />
		</>
	);
};
