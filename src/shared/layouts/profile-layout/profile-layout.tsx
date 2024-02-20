import React from 'react';
import styles from './profile-layout.module.scss';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { SideNav } from '@/widgets/side-nav';

export const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
        <>
		<div className={styles.wrapper}>
			<Header isLoggedIn />
        <div className={styles.wrapper__title}>
		<h2 className={styles.wrapper__titleText}>Личный кабинет</h2>
		</div>
            
			<div className={styles.container}>
            <SideNav/>
			<div>{children}</div>

            </div>

			
		</div>
        <Footer />
        </>
	);
};
