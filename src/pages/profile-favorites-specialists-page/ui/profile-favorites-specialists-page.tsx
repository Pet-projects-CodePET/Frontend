'use client';

import React, { useState, useEffect } from 'react';
import { useGetFavoriteSpecialistsQuery } from '@/services/SpecialistService';
import { InputSearch } from '@/shared/ui';
import { SpecialistCard } from '@/widgets/specialist-card';
import { SpecialistType } from '@/pages/specialists-page/ui/types';
import { Loader } from '@/shared/ui';
import { Pagination } from '@/entities';
import { Tooltip } from '@/widgets/tooltip';
import styles from './profile-favorites-specialists-page.module.scss';

export const FavoritesSpecialists = () => {
	const pageSize = 7;
	const [currentSettings, setCurrentSettings] = useState({
		currentPage: 1,
		query: '',
	});
	const { currentPage, query } = currentSettings;
	const {
		data: allFavoriteSpecialists,
		isLoading,
		refetch,
	} = useGetFavoriteSpecialistsQuery({
		currentPage,
		query,
	});
	const [isVisibleSearch, setIsVisibleSearch] = useState(false);
	const [favoriteSpecialistsArray, setFavoriteSpecialistsArray] = useState<
		SpecialistType[]
	>([]);
	// console.log('allFavoriteSpecialists', allFavoriteSpecialists);
	const handleDeleteCard = (id: number) => {
		setFavoriteSpecialistsArray(
			favoriteSpecialistsArray.filter((item) => item.user_id !== id)
		);
	};

	useEffect(() => {
		if (allFavoriteSpecialists?.results) {
			setFavoriteSpecialistsArray(allFavoriteSpecialists?.results);
		}
		if (allFavoriteSpecialists?.results.length > 0) {
			setIsVisibleSearch(true);
		}
		if (
			isVisibleSearch &&
			allFavoriteSpecialists?.results.length === 0 &&
			query.length === 0
		) {
			setIsVisibleSearch(false);
		}
	}, [query, allFavoriteSpecialists, isVisibleSearch]);

	useEffect(() => {
		if (favoriteSpecialistsArray?.length === 0) {
			if (currentPage > 1) {
				setCurrentSettings((prevSettings) => ({
					...prevSettings,
					currentPage: currentPage - 1,
				}));
			}
			if (currentPage === 1) {
				refetch();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favoriteSpecialistsArray, refetch]);

	return (
		<>
			<section className={styles.favoritesSpecialists}>
				{isVisibleSearch && (
					<div className={styles.inputSearch}>
						<Tooltip text="Введите не менее 3х символов">
							<div className={styles.input}>
								<InputSearch
									search={(query) =>
										setCurrentSettings({
											currentPage: currentSettings.currentPage,
											query,
										})
									}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{isLoading ? (
					<Loader />
				) : favoriteSpecialistsArray?.length > 0 ? (
					favoriteSpecialistsArray.map((item: SpecialistType) => (
						<SpecialistCard
							key={item.user_id}
							user_id={item.user_id}
							specialists={item.specialists}
							avatar={item.avatar ? item.avatar : ''}
							name={item.name}
							userName={item.username}
							readyToParticipate={item.ready_to_participate}
							is_favorite={item.is_favorite}
							handleDeleteCard={handleDeleteCard}
						/>
					))
				) : (
					<div className={styles.textContainer}>
						<p className={styles.text}>Здесь появятся избранные специалисты</p>
						<span className={styles.subtitle}>
							Сохраните понравившиеся проекты из раздела «Специалисты»
						</span>
					</div>
				)}
				<Pagination
					onPageChange={(page) =>
						setCurrentSettings({
							currentPage: Number(page),
							query: currentSettings.query,
						})
					}
					totalCount={allFavoriteSpecialists && allFavoriteSpecialists.count}
					currentPage={currentSettings.currentPage}
					pageSize={pageSize}
				/>
			</section>
		</>
	);
};
