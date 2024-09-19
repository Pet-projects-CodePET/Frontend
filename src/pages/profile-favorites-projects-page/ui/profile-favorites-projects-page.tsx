'use client';
import React, { useState } from 'react';
import { useGetFavoriteProjectsQuery } from '@/services/ProjectService';
import { ProjectCardFull } from '@/widgets/project-card-full';
import { ProjectCardFullType } from '@/widgets/project-card-full/ui/types';
import { Loader } from '@/shared/ui';
import { Pagination } from '@/entities';
import styles from './profile-favorites-projects-page.module.scss';

export const FavoritesProjects = () => {
	const pageSize = 7;
	const [currentSettings, setCurrentSettings] = useState({ currentPage: 1 });
	const { data: favoriteProjects, isLoading } = useGetFavoriteProjectsQuery(currentSettings);
	//console.log(favoriteProjects);
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.container}>
					{favoriteProjects.results.length > 0 ? favoriteProjects.results.map((project: ProjectCardFullType) => {
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
					}) : <p>Нет избранных проектов</p>}
				
						<Pagination
							onPageChange={(page) =>
								setCurrentSettings({ currentPage: Number(page) })
							}
							totalCount={favoriteProjects && favoriteProjects.count}
							currentPage={currentSettings.currentPage}
							pageSize={pageSize}
						/>
				</div>
			)}
		</div>
	);
};
