'use client';

import React from 'react';
import styles from './current-projects.module.scss';
import { MainButton, ProjectCard } from '@/shared/ui';
import { currentProjects } from '@/shared/constants/current-projects/current-projects';
import { useWindowSize } from '@/shared/hooks';

export const CurrentProjects = () => {
	const [width] = useWindowSize();

	return (
		<>
			<h2 className={styles.header}>Актуальные проекты</h2>
			<p className={styles.text}>
				{width > 779
					? 'Примените свои навыки и получите опыт работы в команде единомышленников, присоединившись к актуальным проектам.'
					: 'Присоединитесь к актуальным проектам.'}
			</p>
			<div className={styles.projectCards}>
				{currentProjects.map((item) => {
					const { id, date, title, direction, tags, link } = item;
					return (
						<ProjectCard
							key={id}
							date={date}
							title={title}
							direction={direction}
							tags={tags}
							link={link}
						/>
					);
				})}
			</div>
			<div className={styles.showAll}>
				{width > 779 && (
					<MainButton variant="primary" width="max">
						Все проекты
					</MainButton>
				)}
			</div>
		</>
	);
};
