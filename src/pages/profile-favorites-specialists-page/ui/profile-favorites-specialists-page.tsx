'use client';

import React, { useState } from 'react';
import { useGetFavoriteSpecialistsQuery } from '@/services/SpecialistService';
//import { InputSearch } from '@/shared/ui';
import styles from './profile-favorites-specialists-page.module.scss';

export const FavoritesSpecialists = () => {
	const [currentSettings, /*setCurrentSettings*/] = useState({
		currentPage: 1,
		query: '',
	});
	const { currentPage, query } = currentSettings;
	const { data: allFavoriteSpecialists } = useGetFavoriteSpecialistsQuery({
		currentPage,
		query,
	});
	console.log('allFavoriteSpecialists', allFavoriteSpecialists);
	return (
		<>
			<section className={styles.favoritesSpecialists}>
				{/* <div className={styles.inputSearch}>
					<InputSearch search={() => {}} onChange={() => {}} />
				</div> */}
				<div className={styles.textContainer}>
					<p className={styles.text}>Здесь появятся избранные специалисты</p>
					<span className={styles.subtitle}>
						Сохраните понравившиеся проекты из раздела «Специалисты»
					</span>
				</div>
			</section>
		</>
	);
};
