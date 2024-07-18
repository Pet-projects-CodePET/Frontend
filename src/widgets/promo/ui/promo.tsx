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
		<div className={styles['promo']}>
			<div className={styles['promo-header']}>
				<h3 className={styles['promo-header-title']}>
					{section ? section[0].title : titleMainPage}
				</h3>
				<p className={styles['promo-header-description']}>
					{section ? section[0].description : descriptionMainPage}
				</p>
			</div>
			<div className={styles['promo-bottom']}>
				<div className={styles['promo-bottom-content']}>
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
			<div className={styles['promo-info']}>
				<div className={styles['promo-info-list']}>
					<div className={styles['promo-info-list-card']}>
						<p className={styles['promo-info-projects-count']}>
							{counters?.projects}
						</p>
						<p className={styles['promo-info-projects-description']}>
							{NounsDeclension(counters?.projects, [
								'проект',
								'проекта',
								'проектов',
							])}
						</p>
					</div>

					<div className={styles['promo-info-list-card']}>
						<p className={styles['promo-info-members-count']}>
							{counters?.users}
						</p>
						<p className={styles['promo-info-members-description']}>
							{NounsDeclension(counters?.users, [
								'участник',
								'участника',
								'участников',
							])}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
