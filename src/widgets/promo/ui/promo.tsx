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
			<div className={styles['promoHeader']}>
				<h3 className={styles['promoHeaderTitle']}>
					{section ? section[0].title : titleMainPage}
				</h3>
				<p className={styles['promoHeaderDescription']}>
					{section ? section[0].description : descriptionMainPage}
				</p>
			</div>
			<div className={styles['promoBottom']}>
				<div className={styles['promoBottomContent']}>
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
			<div className={styles['promoInfo']}>
				<div className={styles['promoInfoList']}>
					<div className={styles['promoInfoCard']}>
						<p className={styles['projectsCount']}>{counters?.projects}</p>
						<p className={styles['projectsDescription']}>
							{NounsDeclension(counters?.projects, [
								'проект',
								'проекта',
								'проектов',
							])}
						</p>
					</div>

					<div className={styles['promoInfoCard']}>
						<p className={styles['membersCount']}>{counters?.users}</p>
						<p className={styles['membersDescription']}>
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
