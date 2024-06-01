'use client';
import React, {useEffect, useState } from "react";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import styles from './projects-layout.module.scss';

export const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
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
        <div className={styles.projectsLayout}>
        <Header isLoggedIn={isLoggedIn}/>
            {children}
        </div>
		<Footer/>
		</>

    )
}