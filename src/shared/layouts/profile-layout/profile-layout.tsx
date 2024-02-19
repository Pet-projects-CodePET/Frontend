import React from 'react';
import styles from './profile-layout.module.scss';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { SideNuv } from '@/widgets/side-nav';

export const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
        <>
		<div className={styles.wrapper}>
			<Header isLoggedIn />
         
            <h2>Личный кабинет</h2>
			<div className={styles.container}>
            <SideNuv/>
			<div>{children}</div>

            </div>

			
		</div>
        <Footer />
        </>
	);
};
