'use client';

import React from 'react';
import styles from './current-projects.module.scss';
import { MainButton, ProjectCard } from '@/shared/ui';
import { currentProjects } from '@/shared/types/current-projects';
import { useGetSectionQuery } from '@/services/GeneralService';

export const CurrentProjects = () => {
	const { data: section } = useGetSectionQuery([]);  
	return (
		<>
			<h2 className={styles.header}>{section ? section[1].title : ' '}</h2>
			<p className={styles.text}>
			{section ? section[1].description : ' '}
			</p>
			<p className={styles.textMobile}>Присоединитесь к актуальным проектам.</p>
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
				<MainButton variant="primary" width="max">
					Все проекты
				</MainButton>
			</div>
		</>
	);
};
