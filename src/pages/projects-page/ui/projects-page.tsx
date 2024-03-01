import React from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
import styles from './projects-page.module.scss';

// TODO удалить projects когда будут данные с сервера
const projects = [
	{
		id: 1,
		professions: [
			'UX/UI',
			'Manual QA',
			'PM',
			'System Analyst',
			'Front-end',
			'DevOps',
		],
		skills: ['Навык1', 'Навык2', 'Навык3'],
		description: ` Lorem ipsum`.repeat(15),
		isActiveProject: true,
		duration: '15 сентября-22 августа',
		title: 'Название проекта',
		subtitle: 'Мобильная разработка',
	},
	{
		id: 2,
		professions: [
			'UX/UI',
			'Manual QA',
			'PM',
			'System Analyst',
			'Front-end',
			'DevOps',
		],
		skills: ['Навык1', 'Навык2', 'Навык3'],
		description: ` Lorem ipsum`.repeat(15),
		isActiveProject: false,
		duration: '10 сентября-15 августа',
		title: 'Название проекта2',
		subtitle: 'Мобильная разработка',
	},
	{
		id: 3,
		professions: [
			'UX/UI',
			'Manual QA',
			'PM',
			'System Analyst',
			'Front-end',
			'DevOps',
		],
		skills: ['Навык1', 'Навык2', 'Навык3'],
		description: ` Lorem ipsum`.repeat(15),
		isActiveProject: true,
		duration: '15 сентября-22 августа',
		title: 'Название проекта3',
		subtitle: 'Мобильная разработка',
	},
];

export const Projects = () => {
	return (
		<div className={styles.projectsContainer}>
			{projects.map((project) => {
				return (
					<ProjectCardFull
						isActiveProject={project.isActiveProject}
						professions={project.professions}
						skills={project.skills}
						description={project.description}
						duration={project.duration}
						title={project.title}
						subtitle={project.subtitle}
						key={project.id}
					/>
				);
			})}
		</div>
	);
};
