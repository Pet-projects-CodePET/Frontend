'use client';

import React, { useState } from 'react';
import { useGetFavoriteProjectsQuery } from '@/services/ProjectService';
import { ProjectCardFull } from '@/widgets/project-card-full';
import { ProjectCardFullType } from '@/widgets/project-card-full/ui/types';
import { Loader } from '@/shared/ui';
import { Pagination } from '@/entities';
import { InputSearch } from '@/shared/ui';
import styles from './profile-favorites-projects-page.module.scss';

export const FavoritesProjects = () => {
	const pageSize = 7;
	const [currentSettings, setCurrentSettings] = useState({ currentPage: 1 });
	const { data: favoriteProjects, isLoading } =
		useGetFavoriteProjectsQuery(currentSettings);
	//console.log(favoriteProjects);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<section className={styles.favoritesProjects}>
					{favoriteProjects.results.length > 0 ? (
						<div className={styles.inputSearch}>
							<InputSearch search={() => {}} onChange={() => {}} />
						</div>
					) : null}

					{favoriteProjects.results.length > 0 ? (
						favoriteProjects.results.map((project: ProjectCardFullType) => {
							return (
								<ProjectCardFull
									id={project.id}
									description={project.description}
									ended={project.ended}
									started={project.started as string}
									name={project.name}
									directions={project.directions}
									status={project.status}
									key={project.id}
									recruitment_status={project.recruitment_status}
									project_specialists={project.project_specialists}
									busyness={project.busyness}
									link={project.link}
									phone_number={project.phone_number}
									telegram_nick={project.telegram_nick}
									email={project.email}
									is_favorite={project.is_favorite}
								/>
							);
						})
					) : (
						<div className={styles.textContainer}>
							<p className={styles.text}>Здесь появятся избранные проекты</p>
							<span className={styles.subtitle}>
								Сохраните понравившиеся проекты из раздела «Проекты»
							</span>
						</div>
					)}

					<Pagination
						onPageChange={(page) =>
							setCurrentSettings({ currentPage: Number(page) })
						}
						totalCount={favoriteProjects && favoriteProjects.count}
						currentPage={currentSettings.currentPage}
						pageSize={pageSize}
					/>
				</section>
			)}
		</>
	);
};
