'use client';

import React from 'react';
import { ProjectCardFull } from '@/widgets/project-card-full';
import { SingleSelect } from '@/shared/ui/single-select/single-select';
import { statusOptions } from '@/shared/constants/status-options/status-options';
import { projectsArray } from '@/shared/constants/projects/projects';
import { recruitmentStatus } from '@/shared/constants/recruitment-status/recruitment-status';
import styles from './projects-page.module.scss';

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
				{projectsArray.map((project) => {
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
