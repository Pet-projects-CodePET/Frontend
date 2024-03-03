'use client';

import React from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
import styles from './projects-page.module.scss';
import { SingleSelect } from '@/widgets/single-select/ui/single-select';
import { statusOptions } from '@/shared/types/status-options';
import { projects } from '@/shared/types/projects';
import { recruitmentStatus } from '@/shared/types/recruitment-status';

export const Projects = () => {
	return (
		<>
			<div className={styles.filterContainer}>
				<SingleSelect
					name="select-status"
					caption="Статус проекта"
					options={statusOptions}
					selectedOption={null}
				/>
				<SingleSelect
					name="select-recruitment-status"
					caption="Статус набора"
					options={recruitmentStatus}
					selectedOption={null}
				/>
			</div>
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
		</>
	);
};
