'use client';

import React from 'react';
import styles from './current-projects.module.scss';
import { MainButton, ProjectCard } from '@/shared/ui';

export const CurrentProjects = () => {
	const colors = [
		{
			text: 'UX/UI',
			color: '#B9F18C',
		},
		{
			text: 'Manual QA',
			color: '#F6BD60',
		},
		{
			text: 'PM',
			color: '#8CAAFF',
		},
		{
			text: 'System Analyst',
			color: '#CDB4DB',
		},
		{
			text: 'Front-end',
			color: '#F28482',
		},
		{
			text: 'DevOps',
			color: '#A2D2FF',
		},
	];

	const currentProjects = [
		{
			date: '15 сентября-22 августа',
			title: 'Название проекта',
			direction: 'Мобильная разработка',
			tags: { colors },
			link: '/',
		},
		{
			date: '15 сентября-22 августа',
			title: 'Название проекта',
			direction: 'Мобильная разработка',
			tags: { colors },
			link: '/',
		},
		{
			date: '15 сентября-22 августа',
			title: 'Название проекта',
			direction: 'Мобильная разработка',
			tags: { colors },
			link: '/',
		},
		{
			date: '15 сентября-22 августа',
			title: 'Название проекта',
			direction: 'Мобильная разработка',
			tags: { colors },
			link: '/',
		},
		{
			date: '15 сентября-22 августа',
			title: 'Название проекта',
			direction: 'Мобильная разработка',
			tags: { colors },
			link: '/',
		},
		{
			date: '15 сентября-22 августа',
			title: 'Название проекта',
			direction: 'Мобильная разработка',
			tags: { colors },
			link: '/',
		},
	];

	return (
		<>
			<h2 className={styles.header}>Актуальные проекты</h2>
			<p className={styles.text}>
				Примените свои навыки и получите опыт работы в команде единомышленников,
				присоединившись к актуальным проектам.
			</p>
			<div className={styles.projectCards}>
				{currentProjects.map((item, index) => {
					const { date, title, direction, tags, link } = item;
					return (
						// TODO: key поменять на ID, приходящий с бэка
						<ProjectCard
							key={index}
							date={date}
							title={title}
							direction={direction}
							tags={tags.colors}
							link={link}
						/>
					);
				})}
			</div>
			<MainButton variant="primary" width="regular">
				Все проекты
			</MainButton>
		</>
	);
};
