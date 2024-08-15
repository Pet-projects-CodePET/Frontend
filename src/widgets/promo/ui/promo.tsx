'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MainButton } from '@/shared/ui';
import { NounsDeclension } from '@/utils/declension/declension';
import {
	useGetCountQuery,
	useGetSectionQuery,
} from '@/services/GeneralService';
import { titleMainPage, descriptionMainPage } from '@/shared/constants';
import styles from './promo.module.scss';

export const Promo = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { data: counters } = useGetCountQuery(0);
	const { data: section } = useGetSectionQuery([]);
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

	return (
		<section className={styles.promo__container}>
			<div className={styles.promo__textContainer}>
				<p className={styles.promo__title}>
					{section ? section[0].title : titleMainPage}
				</p>
				<p className={styles.promo__subtitle}>
					{section ? section[0].description : descriptionMainPage}
				</p>
			</div>
			<div className={styles.promo__itemsContainer}>
				<div className={styles.promo__itemsList}>
					<div className={styles.promo__items}>
						<p className={styles.promo__itemOne}>{counters?.projects}</p>
						<p className={styles.promo__itemTwo}>
							{NounsDeclension(counters?.projects, [
								'проект',
								'проекта',
								'проектов',
							])}
						</p>
					</div>
					<div className={styles.promo__items}>
						<p className={styles.promo__itemOne}>{counters?.users}</p>
						<p className={styles.promo__itemTwo}>
							{NounsDeclension(counters?.users, [
								'участник',
								'участника',
								'участников',
							])}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.promo__bottom}>
				<div className={styles.promo__bottomContent}>
					<MainButton
						variant="primary"
						width="regular"
						onClick={
							isLoggedIn
								? () => router.push('create-project')
								: () => router.push('registration')
						}>
						Создать проект
					</MainButton>
				</div>
			</div>
		</section>
	);
};
