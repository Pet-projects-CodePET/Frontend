'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MainButton, ProjectCard } from '@/shared/ui';
import { currentProjects } from '@/shared/types/current-projects';
import { useGetSectionQuery } from '@/services/GeneralService';
import { titleCurrentProjects, descriptionCurrentProjects } from '@/shared/constants';
import styles from './current-projects.module.scss';

export const CurrentProjects = () => {
	const router = useRouter();
	const { data: section } = useGetSectionQuery([]);  
	return (
		<>
			<h2 className={styles.header}>{section ? section.results[1].title : titleCurrentProjects}</h2>
			<p className={styles.text}>
			{section ? section.results[1].description : descriptionCurrentProjects}
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
				<MainButton variant="primary" width="max"
				onClick={() => router.push('projects')}>
					Все проекты
				</MainButton>
			</div>
		</>
	);
};
